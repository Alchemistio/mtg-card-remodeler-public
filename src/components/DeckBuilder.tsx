import { useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUp, FileText, Link2, LoaderCircle, Printer, Trash2, Upload } from "lucide-react";
import { importDeckUrl, parseCsvDecklist, parseDecklist, resolveDeckLines, type ImportedDeck, type ResolvedDeckLine } from "../card/deckImport";
import { saveCard } from "../card/library";
import { DEFAULT_PRINT_SETTINGS, exportPrintSheetPdf, getSheetGeometry, type PrintSheetSettings } from "../export/printSheet";

const BOARDS = [
  ["main", "Deck principal"], ["commander", "Commandants"], ["sideboard", "Réserve"],
  ["companion", "Compagnon"], ["maybeboard", "Maybeboard"], ["tokens", "Jetons"]
] as const;

export default function DeckBuilder() {
  const [source, setSource] = useState("");
  const [deckText, setDeckText] = useState("");
  const [deck, setDeck] = useState<ImportedDeck>({ name: "Nouveau deck", lines: [] });
  const [resolved, setResolved] = useState<ResolvedDeckLine[]>([]);
  const [language, setLanguage] = useState("fr");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [settings, setSettings] = useState<PrintSheetSettings>(DEFAULT_PRINT_SETTINGS);
  const [exportBusy, setExportBusy] = useState(false);
  const [exportProgress, setExportProgress] = useState({ done: 0, total: 0 });
  const fileRef = useRef<HTMLInputElement>(null);
  const goodLines = resolved.filter(line => line.card);
  const failedLines = resolved.filter(line => !line.card);
  const cardCount = resolved.reduce((sum, line) => sum + (line.card ? line.quantity : 0), 0);
  const geometry = useMemo(() => {
    try { return getSheetGeometry(settings); } catch { return null; }
  }, [settings]);

  function setSetting<K extends keyof PrintSheetSettings>(key: K, value: PrintSheetSettings[K]) {
    setSettings(current => ({ ...current, [key]: value }));
  }
  async function loadText(text: string, name?: string) {
    setError(""); setNotice("");
    const parsed = parseDecklist(text);
    if (!parsed.lines.length) { setError("Aucune ligne de carte reconnue. Exemple : 4 Lightning Bolt (lea) 161"); return; }
    setDeck({ ...parsed, name: name || parsed.name });
    setResolved([]);
    await resolve(parsed);
  }
  async function resolve(parsed: ImportedDeck) {
    setBusy(true); setError(""); setNotice(""); setProgress({ done: 0, total: parsed.lines.length });
    try {
      const items = await resolveDeckLines(parsed.lines, language, undefined, (done, total) => setProgress({ done, total }));
      setResolved(items);
      const missing = items.filter(item => !item.card).length;
      if (missing) setError(`${missing} ligne(s) n'ont pas été reconnues. Corrige les noms ou les éditions avant l'impression.`);
      else setNotice(`${items.length} lignes importées. ${items.reduce((sum, item) => sum + item.quantity, 0)} cartes prêtes.`);
      await Promise.all(items.flatMap(item => item.card ? [saveCard(item.card)] : []));
    } catch (err) { setError(err instanceof Error ? err.message : "L'import a échoué."); }
    finally { setBusy(false); }
  }
  async function importFromUrl() {
    setBusy(true); setError(""); setNotice("");
    try {
      const imported = await importDeckUrl(source);
      setDeck(imported);
      await resolve(imported);
    } catch (err) { setError(err instanceof Error ? err.message : "Import du lien impossible."); setBusy(false); }
  }
  async function handleFile(file?: File) {
    if (!file) return;
    try {
      const text = await file.text();
      const name = file.name.replace(/\.[^.]+$/, "");
      if (file.name.toLowerCase().endsWith(".csv")) {
        const parsed = parseCsvDecklist(text);
        if (!parsed.lines.length) { setError("Aucune ligne de carte reconnue dans le CSV."); return; }
        setDeck({ ...parsed, name });
        setResolved([]);
        await resolve(parsed);
      } else {
        await loadText(text, name);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Impossible de lire ce fichier.");
    }
  }
  function updateQuantity(id: string, quantity: number) {
    setResolved(items => items.map(item => item.id === id ? { ...item, quantity: Math.max(1, Math.min(999, quantity)) } : item));
  }
  function removeLine(id: string) { setResolved(items => items.filter(item => item.id !== id)); }
  function moveLine(id: string, direction: -1 | 1) {
    setResolved(items => {
      const index = items.findIndex(item => item.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= items.length) return items;
      const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; return next;
    });
  }
  async function exportSheet() {
    setExportBusy(true); setError(""); setNotice(""); setExportProgress({ done: 0, total: cardCount });
    try {
      await exportPrintSheetPdf(goodLines.map(line => ({ card: line.card!, quantity: line.quantity })), settings, (done, total) => setExportProgress({ done, total }));
      setNotice("Planche PDF créée. Vérifie l'échelle 100 % dans la boîte de dialogue d'impression.");
    } catch (err) { setError(err instanceof Error ? err.message : "L'export PDF a échoué."); }
    finally { setExportBusy(false); }
  }

  return <section className="deck-builder">
    <div className="deck-builder-head">
      <div><div className="eyebrow">ATELIER DECKLIST</div><h2>Importer et préparer une planche</h2><p>Charge un deck, choisis les cartes et compose tes pages d'impression.</p></div>
      <div className="deck-stats"><strong>{cardCount}</strong><span>cartes prêtes</span><strong>{failedLines.length}</strong><span>à corriger</span></div>
    </div>
    <div className="deck-import-grid">
      <section className="deck-panel">
        <div className="panel-title"><FileText size={16}/> Importer une decklist</div>
        <label className="deck-field">Lien public Moxfield ou Archidekt
          <div className="deck-url"><Link2 size={15}/><input value={source} onChange={e => setSource(e.target.value)} placeholder="https://moxfield.com/decks/…"/><button onClick={importFromUrl} disabled={busy || !source.trim()}>Importer</button></div>
        </label>
        <div className="deck-or">OU COLLER / IMPORTER UN FICHIER</div>
        <textarea className="deck-textarea" placeholder={"1 Sol Ring\n1 Command Tower\n4 Lightning Bolt (lea) 161\n\nSideboard\n2 Negate"} value={deckText} onChange={e => setDeckText(e.target.value)} rows={8}/>
        <div className="deck-import-actions"><button className="tool-button" onClick={() => loadText(deckText)} disabled={busy || !deckText.trim()}>Lire la decklist collée</button><button className="tool-button" onClick={() => fileRef.current?.click()}><Upload size={14}/> Fichier TXT / CSV</button><input ref={fileRef} type="file" accept=".txt,.csv,.dec,.list" hidden onChange={e => handleFile(e.target.files?.[0])}/></div>
        <label className="deck-field">Langue préférée
          <select value={language} onChange={e => setLanguage(e.target.value)}><option value="fr">Français</option><option value="en">Anglais</option><option value="de">Allemand</option><option value="es">Espagnol</option><option value="it">Italien</option><option value="ja">Japonais</option></select>
        </label>
        {busy && <div className="deck-progress"><LoaderCircle className="spin" size={15}/> Résolution Scryfall : {progress.done}/{progress.total}</div>}
        {error && <p className="error" role="alert">{error}</p>}{notice && <p className="notice" role="status">{notice}</p>}
      </section>
      <section className="deck-panel deck-list-panel">
        <div className="panel-title">Liste du deck · {deck.name} <span>{resolved.length} lignes</span></div>
        {!resolved.length && <div className="deck-empty">Importe une decklist pour voir les cartes et leurs impressions.</div>}
        {BOARDS.map(([key, title]) => {
          const lines = resolved.filter(item => item.board === key);
          if (!lines.length) return null;
          return <div className="deck-board" key={key}><h3>{title} <small>{lines.reduce((sum, item) => sum + item.quantity, 0)}</small></h3>
            {lines.map(item => <div className={item.card ? "deck-card-row" : "deck-card-row unresolved"} key={item.id}>
              <div className="deck-card-thumb">{item.card?.imageUrl && <img src={item.card.imageUrl} alt=""/>}</div>
              <div className="deck-card-name"><strong>{item.card?.name ?? item.name}</strong><small>{item.card ? `${item.card.set.toUpperCase()} · ${item.card.collectorNumber} · ${item.card.language.toUpperCase()}` : item.error}</small></div>
              <div className="deck-row-controls"><button title="Monter" onClick={() => moveLine(item.id,-1)}><ArrowUp size={13}/></button><button title="Descendre" onClick={() => moveLine(item.id,1)}><ArrowDown size={13}/></button><input aria-label="Quantité" type="number" min="1" max="999" value={item.quantity} onChange={e => updateQuantity(item.id,Number(e.target.value))}/><button title="Retirer" onClick={() => removeLine(item.id)}><Trash2 size={13}/></button></div>
            </div>)}
          </div>;
        })}
      </section>
    </div>
    <section className="deck-panel print-layout-panel">
      <div className="panel-title"><Printer size={16}/> Mise en page et export PDF</div>
      <div className="print-options-grid">
        <label className="deck-field">Papier<select value={settings.paper} onChange={e => setSetting("paper",e.target.value as PrintSheetSettings["paper"])}><option>A4</option><option>A3</option><option>Letter</option><option>Legal</option><option>Custom</option></select></label>
        {settings.paper === "Custom" && <><label className="deck-field">Largeur papier (mm)<input type="number" min="50" value={settings.customWidthMm} onChange={e => setSetting("customWidthMm",Number(e.target.value))}/></label><label className="deck-field">Hauteur papier (mm)<input type="number" min="50" value={settings.customHeightMm} onChange={e => setSetting("customHeightMm",Number(e.target.value))}/></label></>}
        <label className="deck-field">Orientation<select value={settings.orientation} onChange={e => setSetting("orientation",e.target.value as PrintSheetSettings["orientation"])}><option value="portrait">Portrait</option><option value="landscape">Paysage</option></select></label>
        <label className="deck-field">Colonnes<input type="number" min="1" max="12" value={settings.columns} onChange={e => setSetting("columns",Number(e.target.value))}/></label>
        <label className="deck-field">Lignes par page<input type="number" min="1" max="12" value={settings.rows} onChange={e => setSetting("rows",Number(e.target.value))}/></label>
        <label className="deck-field">Marge haute (mm)<input type="number" min="0" value={settings.marginTopMm} onChange={e => setSetting("marginTopMm",Number(e.target.value))}/></label>
        <label className="deck-field">Marge droite (mm)<input type="number" min="0" value={settings.marginRightMm} onChange={e => setSetting("marginRightMm",Number(e.target.value))}/></label>
        <label className="deck-field">Marge basse (mm)<input type="number" min="0" value={settings.marginBottomMm} onChange={e => setSetting("marginBottomMm",Number(e.target.value))}/></label>
        <label className="deck-field">Marge gauche (mm)<input type="number" min="0" value={settings.marginLeftMm} onChange={e => setSetting("marginLeftMm",Number(e.target.value))}/></label>
        <label className="deck-field">Espacement (mm)<input type="number" min="0" step=".5" value={settings.gutterMm} onChange={e => setSetting("gutterMm",Number(e.target.value))}/></label>
        <label className="deck-field">Fond perdu (mm)<input type="number" min="0" max="5" step=".5" value={settings.bleedMm} onChange={e => setSetting("bleedMm",Number(e.target.value))}/></label>
        <label className="deck-field">Résolution (DPI)<select value={settings.dpi} onChange={e => setSetting("dpi",Number(e.target.value))}><option value="300">300</option><option value="600">600</option><option value="900">900</option><option value="1200">1200</option></select></label>
        <label className="deck-field">Largeur carte (mm)<input type="number" min="10" step=".1" value={settings.cardWidthMm} onChange={e => setSetting("cardWidthMm",Number(e.target.value))}/></label>
        <label className="deck-field">Hauteur carte (mm)<input type="number" min="10" step=".1" value={settings.cardHeightMm} onChange={e => setSetting("cardHeightMm",Number(e.target.value))}/></label>
      </div>
      <div className="print-toggles"><label><input type="checkbox" checked={settings.cropMarks} onChange={e => setSetting("cropMarks",e.target.checked)}/> Traits de coupe</label><label><input type="checkbox" checked={settings.centerGrid} onChange={e => setSetting("centerGrid",e.target.checked)}/> Centrer la grille</label></div>
      <div className="sheet-summary">{geometry ? <><strong>{geometry.pageWidthMm} × {geometry.pageHeightMm} mm</strong><span>{geometry.cardsPerPage} cartes par page · {Math.ceil(cardCount / geometry.cardsPerPage)} page(s) prévues</span></> : <span className="error">La grille ne tient pas sur le papier sélectionné.</span>}</div>
      {geometry && <div className="sheet-preview" style={{ aspectRatio: `${geometry.pageWidthMm}/${geometry.pageHeightMm}` }}>
        <div className="sheet-grid" style={{ gridTemplateColumns: `repeat(${geometry.columns}, 1fr)`, gridTemplateRows: `repeat(${geometry.rows}, 1fr)`, gap: `${Math.max(1, settings.gutterMm)}px`, margin: `${Math.max(2, settings.marginTopMm / 2)}px ${Math.max(2, settings.marginRightMm / 2)}px ${Math.max(2, settings.marginBottomMm / 2)}px ${Math.max(2, settings.marginLeftMm / 2)}px` }}>
          {Array.from({length:geometry.cardsPerPage},(_,i)=> <div className="sheet-cell" key={i}>{goodLines[i % Math.max(1,goodLines.length)]?.card?.imageUrl && <img src={goodLines[i % goodLines.length].card!.imageUrl} alt=""/>}</div>)}
        </div>
      </div>}
      <button className="export-button deck-export" disabled={exportBusy || busy || !goodLines.length || !geometry} onClick={exportSheet}>{exportBusy ? <><LoaderCircle className="spin" size={15}/> Export {exportProgress.done}/{exportProgress.total}</> : <><Printer size={15}/> Exporter la planche PDF</>}</button>
      <p className="print-note">Imprime à 100 % / taille réelle, sans « ajuster à la page ». Le nombre de pages est calculé automatiquement. Les cartes non reconnues sont exclues de l'export.</p>
    </section>
  </section>;
}
