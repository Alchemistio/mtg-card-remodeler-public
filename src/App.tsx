import { useEffect, useMemo, useState } from "react";
import {
  Search, Download, Layers3, Sparkles, LoaderCircle, Image as ImageIcon,
  Save, FileImage, FileText, FlipHorizontal, Bookmark
} from "lucide-react";
import type { Card } from "./card/model";
import type { CardOverrides } from "./card/customization";
import { applyCardOverrides, createCardProject, type CardProject } from "./card/customization";
import { searchCards } from "./card/scryfall";
import { renderCardSvg } from "./card/renderer";
import { exportCardPdf, exportCardPng, exportCardSvg } from "./export/cardExport";
import { listProjects, listSavedCards, saveCard, saveProject } from "./card/library";

const DEMO: Card = {
  id: "demo", name: "Ours runegriffe", manaCost: "{1}{G}", cmc: 2,
  typeLine: "Créature : ours", oracleText: "Piétinement\nQuand cette créature arrive sur le champ de bataille, regardez la carte du dessus de votre bibliothèque. Vous pouvez la mettre dans votre cimetière.",
  colors: ["G"], colorIdentity: ["G"], keywords: [], power: "2", toughness: "2", rarity: "common",
  set: "demo", collectorNumber: "001", language: "fr", layout: "normal", source: "scryfall"
};

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Card[]>([]);
  const [savedCards, setSavedCards] = useState<Card[]>([]);
  const [savedProjects, setSavedProjects] = useState<CardProject[]>([]);
  const [selected, setSelected] = useState<Card>(DEMO);
  const [overrides, setOverrides] = useState<CardOverrides>({});
  const [faceIndex, setFaceIndex] = useState(0);
  const [busy, setBusy] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [bleedMm, setBleedMm] = useState(3);
  const [cropMarks, setCropMarks] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const displayCard = useMemo(() => applyCardOverrides(selected, overrides), [selected, overrides]);
  const svg = useMemo(() => renderCardSvg(displayCard, faceIndex, overrides), [displayCard, faceIndex, overrides]);

  useEffect(() => {
    listSavedCards().then(setSavedCards).catch(() => setSavedCards([]));
    listProjects().then(setSavedProjects).catch(() => setSavedProjects([]));
  }, []);

  useEffect(() => { setFaceIndex(0); }, [selected.id]);

  function selectCard(card: Card) {
    setSelected(card);
    setOverrides({});
  }

  function openProject(project: CardProject) {
    setSelected(project.sourceSnapshot);
    setOverrides(project.overrides);
    setNotice("Projet personnalisé chargé.");
  }

  async function search(event: React.FormEvent) {
    event.preventDefault();
    if (!query.trim()) return;
    setBusy(true); setError(""); setNotice("");
    try {
      const cards = await searchCards(query);
      setResults(cards);
      if (cards.length === 0) setError("Aucune carte française trouvée. Essaie un autre nom.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally { setBusy(false); }
  }

  async function exportSvg() {
    setExportBusy(true); setError(""); setNotice("");
    try {
      await exportCardSvg(displayCard, faceIndex, overrides);
      setNotice("Export SVG autonome terminé.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'export SVG a échoué.");
    } finally { setExportBusy(false); }
  }

  async function saveSelected() {
    try {
      await saveCard(selected);
      await saveProject(createCardProject(selected, overrides));
      setSavedCards(await listSavedCards());
      setSavedProjects(await listProjects());
      setNotice("Projet et carte source enregistrés dans la bibliothèque locale.");
    } catch {
      setError("Impossible d'enregistrer cette carte dans le stockage local.");
    }
  }

  async function runExport(kind: "png" | "pdf") {
    setExportBusy(true); setError(""); setNotice("");
    try {
      if (kind === "png") await exportCardPng(displayCard, 3, faceIndex, overrides);
      else await exportCardPdf(displayCard, faceIndex, overrides, { bleedMm, cropMarks });
      setNotice(kind === "png" ? "Export PNG haute définition terminé." : `Export PDF terminé avec ${bleedMm} mm de fond perdu${cropMarks ? " et traits de coupe" : ""}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'export a échoué.");
    } finally { setExportBusy(false); }
  }

  const setOverride = <K extends keyof CardOverrides>(key: K, value: CardOverrides[K]) =>
    setOverrides(current => ({ ...current, [key]: value }));

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand-mark"><Layers3 size={22}/></div>
      <div><strong>MTG CARD REMODELLER</strong><span>Atelier de reconstruction</span></div>
      <div className="topbar-tag"><span className="status-dot"/> Prototype évolutif</div>
    </header>
    <section className="workspace">
      <aside className="sidebar">
        <div className="eyebrow">BIBLIOTHÈQUE</div>
        <h1>Retrouver une carte</h1>
        <p className="muted">Recherche dans le catalogue Scryfall, avec préférence pour les impressions françaises.</p>
        <form className="search-form" onSubmit={search}>
          <Search size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Nom ou recherche Scryfall…" aria-label="Recherche de carte"/>
          <button type="submit" disabled={busy || !query.trim()}>{busy ? <LoaderCircle className="spin" size={17}/> : "Chercher"}</button>
        </form>
        {error && <p className="error" role="alert">{error}</p>}
        {notice && <p className="notice" role="status">{notice}</p>}
        <div className="results-heading"><span>RÉSULTATS</span><span>{results.length}</span></div>
        <div className="results-list">
          {results.map(card => <button className={selected.id === card.id ? "result selected" : "result"} key={card.id} onClick={() => selectCard(card)}>
            <span className="result-thumb">{card.imageUrl ? <img src={card.imageUrl} alt=""/> : <ImageIcon size={18}/>}</span>
            <span><b>{card.name}</b><small>{card.typeLine}</small></span>
          </button>)}
          {results.length === 0 && <div className="empty-results">Les cartes trouvées apparaîtront ici.</div>}
        </div>
        <div className="results-heading saved-heading"><span><Bookmark size={12}/> BIBLIOTHÈQUE LOCALE</span><span>{savedCards.length}</span></div>
        <div className="results-list saved-list">
          {savedCards.map(card => <button className={selected.id === card.id ? "result selected" : "result"} key={card.id} onClick={() => selectCard(card)}>
            <span className="result-thumb">{card.imageUrl ? <img src={card.imageUrl} alt=""/> : <ImageIcon size={18}/>}</span>
            <span><b>{card.name}</b><small>{card.set.toUpperCase()} · {card.collectorNumber}</small></span>
          </button>)}
          {savedCards.length === 0 && <div className="empty-results">Enregistre une carte pour la retrouver ici.</div>}
        </div>
        <div className="results-heading saved-heading"><span>PROJETS PERSONNALISÉS</span><span>{savedProjects.length}</span></div>
        <div className="results-list saved-list">
          {savedProjects.map(project => <button className="result" key={project.id} onClick={() => openProject(project)}>
            <span className="result-thumb"><Bookmark size={16}/></span>
            <span><b>{project.overrides.name ?? project.sourceSnapshot.name}</b><small>Projet · {project.sourceSnapshot.set.toUpperCase()}</small></span>
          </button>)}
          {savedProjects.length === 0 && <div className="empty-results">Tes projets personnalisés apparaîtront ici.</div>}
        </div>
        <div className="sidebar-note"><Sparkles size={16}/><span>Données de carte via Scryfall. Les cadres et rendus personnalisés sont expérimentaux.</span></div>
      </aside>
      <section className="editor">
        <div className="editor-heading">
          <div><div className="eyebrow">ESPACE DE TRAVAIL</div><h2>Aperçu de la carte</h2></div>
          <div className="toolbar">
            {selected.layout !== "split" && selected.faces && selected.faces.length > 1 && <button className="tool-button" onClick={() => setFaceIndex(index => (index + 1) % selected.faces!.length)}><FlipHorizontal size={15}/> Face {faceIndex + 1}/{selected.faces.length}</button>}
            <button className="tool-button" onClick={saveSelected}><Save size={15}/> Enregistrer</button>
          </div>
        </div>
        <div className="preview-stage">
          <div className="card-preview" dangerouslySetInnerHTML={{ __html: svg }}/>
          <div className="preview-caption"><span>{displayCard.faces?.[faceIndex]?.name ?? displayCard.name}</span><span>Format de travail · 750 × 1050</span></div>
        </div>
        <section className="card-edit-panel">
          <div className="eyebrow">PERSONNALISATION</div>
          <div className="edit-grid">
            <label>Nom<input value={overrides.name ?? selected.name} onChange={event => setOverride("name", event.target.value)}/></label>
            <label>Type<input value={overrides.typeLine ?? selected.typeLine} onChange={event => setOverride("typeLine", event.target.value)}/></label>
            <label>Force<input value={overrides.power ?? selected.power ?? ""} onChange={event => setOverride("power", event.target.value)}/></label>
            <label>Endurance<input value={overrides.toughness ?? selected.toughness ?? ""} onChange={event => setOverride("toughness", event.target.value)}/></label>
            <label className="wide">Texte de règles<textarea rows={5} value={overrides.oracleText ?? selected.oracleText} onChange={event => setOverride("oracleText", event.target.value)}/></label>
            <label>Cadre
              <select value={overrides.framePreset ?? "auto"} onChange={event => setOverride("framePreset", event.target.value === "auto" ? undefined : event.target.value)}>
                <option value="auto">Automatique</option><option value="white">Blanc</option><option value="blue">Bleu</option><option value="black">Noir</option><option value="red">Rouge</option><option value="green">Vert</option><option value="colorless">Incolore</option><option value="multicolor">Multicolore</option>
              </select>
            </label>
            <label>Police (px)<input type="number" min="11" max="30" value={overrides.fontSize ?? 22} onChange={event => setOverride("fontSize", Number(event.target.value))}/></label>
          </div>
          <button className="reset-button" onClick={() => setOverrides({})}>Réinitialiser les personnalisations</button>
        </section>
        <div className="print-settings">
          <label>Fond perdu
            <select value={bleedMm} onChange={event => setBleedMm(Number(event.target.value))}>
              <option value={0}>0 mm</option><option value={3}>3 mm</option><option value={5}>5 mm</option>
            </select>
          </label>
          <label className="crop-toggle"><input type="checkbox" checked={cropMarks} onChange={event => setCropMarks(event.target.checked)}/> Traits de coupe</label>
        </div>
        <div className="export-toolbar">
          <button className="export-button" disabled={exportBusy} onClick={exportSvg}><Download size={16}/> SVG</button>
          <button className="export-button" disabled={exportBusy} onClick={() => runExport("png")}><FileImage size={16}/> PNG HD</button>
          <button className="export-button" disabled={exportBusy} onClick={() => runExport("pdf")}><FileText size={16}/> PDF impression</button>
        </div>
        <div className="inspector">
          <div><span className="eyebrow">CARTE SÉLECTIONNÉE</span><strong>{displayCard.name}</strong><small>{displayCard.typeLine || "Type non renseigné"}</small></div>
          <div className="inspector-meta"><span>Langue <b>{displayCard.language.toUpperCase()}</b></span><span>Rareté <b>{displayCard.rarity || "—"}</b></span><span>Extension <b>{displayCard.set.toUpperCase() || "—"}</b></span></div>
        </div>
      </section>
    </section>
    <footer>MTG Card Remodeller <span>•</span> Projet indépendant, non affilié à Wizards of the Coast.</footer>
  </main>;
}

