import { useMemo, useState } from "react";
import { Search, Download, Layers3, Sparkles, LoaderCircle, Image as ImageIcon } from "lucide-react";
import type { Card } from "./card/model";
import { searchCards } from "./card/scryfall";
import { renderCardSvg } from "./card/renderer";

const DEMO: Card = {
  id: "demo", name: "Ours runegriffe", manaCost: "{1}{G}", cmc: 2,
  typeLine: "Créature : ours", oracleText: "Piétinement\nQuand cette créature arrive sur le champ de bataille, regardez la carte du dessus de votre bibliothèque. Vous pouvez la mettre dans votre cimetière.",
  colors: ["G"], colorIdentity: ["G"], power: "2", toughness: "2", rarity: "common",
  set: "demo", collectorNumber: "001", language: "fr", layout: "normal", source: "scryfall"
};

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Card[]>([]);
  const [selected, setSelected] = useState<Card>(DEMO);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const svg = useMemo(() => renderCardSvg(selected), [selected]);

  async function search(event: React.FormEvent) {
    event.preventDefault();
    if (!query.trim()) return;
    setBusy(true); setError("");
    try {
      const cards = await searchCards(query);
      setResults(cards);
      if (cards.length === 0) setError("Aucune carte française trouvée. Essaie un autre nom.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally { setBusy(false); }
  }

  function exportSvg() {
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = `${selected.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.svg`;
    link.click(); URL.revokeObjectURL(url);
  }

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand-mark"><Layers3 size={22}/></div>
      <div><strong>MTG CARD REMODELLER</strong><span>Atelier de reconstruction</span></div>
      <div className="topbar-tag"><span className="status-dot"/> Prototype MVP</div>
    </header>
    <section className="workspace">
      <aside className="sidebar">
        <div className="eyebrow">BIBLIOTHÈQUE</div>
        <h1>Retrouver une carte</h1>
        <p className="muted">Recherche dans le catalogue Scryfall, avec priorité aux impressions françaises.</p>
        <form className="search-form" onSubmit={search}>
          <Search size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Nom de la carte…" aria-label="Nom de la carte"/>
          <button type="submit" disabled={busy || !query.trim()}>{busy ? <LoaderCircle className="spin" size={17}/> : "Chercher"}</button>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="results-heading"><span>RÉSULTATS</span><span>{results.length}</span></div>
        <div className="results-list">
          {results.map(card => <button className={selected.id === card.id ? "result selected" : "result"} key={card.id} onClick={() => setSelected(card)}>
            <span className="result-thumb">{card.imageUrl ? <img src={card.imageUrl} alt=""/> : <ImageIcon size={18}/>}</span>
            <span><b>{card.name}</b><small>{card.typeLine}</small></span>
          </button>)}
          {results.length === 0 && <div className="empty-results">Les cartes trouvées apparaîtront ici.</div>}
        </div>
        <div className="sidebar-note"><Sparkles size={16}/><span>Les données proviennent de Scryfall. Le rendu présenté est une maquette de travail, non un scan officiel.</span></div>
      </aside>
      <section className="editor">
        <div className="editor-heading"><div><div className="eyebrow">ESPACE DE TRAVAIL</div><h2>Aperçu de la carte</h2></div>
          <button className="export-button" onClick={exportSvg}><Download size={16}/> Exporter SVG</button>
        </div>
        <div className="preview-stage">
          <div className="card-preview" dangerouslySetInnerHTML={{ __html: svg }}/>
          <div className="preview-caption"><span>{selected.name}</span><span>Format de travail · 750 × 1050 px</span></div>
        </div>
        <div className="inspector">
          <div><span className="eyebrow">CARTE SÉLECTIONNÉE</span><strong>{selected.name}</strong><small>{selected.typeLine || "Type non renseigné"}</small></div>
          <div className="inspector-meta"><span>Langue <b>{selected.language.toUpperCase()}</b></span><span>Rareté <b>{selected.rarity || "—"}</b></span><span>Extension <b>{selected.set.toUpperCase() || "—"}</b></span></div>
        </div>
      </section>
    </section>
    <footer>MTG Card Remodeller <span>•</span> Projet indépendant, non affilié à Wizards of the Coast.</footer>
  </main>;
}