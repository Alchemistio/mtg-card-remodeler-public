import type { Card } from "./model";
import { tokenizeRulesText } from "./symbols";
import { createCanvasTextMeasure, fitText } from "./typography";

const escapeXml = (value: string) => value.replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
})[char] ?? char);

const FRAME_COLORS: Record<string, string> = {
  W: "#e7d9b7", U: "#7da8c5", B: "#756d78", R: "#c77b5f", G: "#829b72"
};

function manaPips(cost: string, startX = 670, y = 75): string {
  const symbols = cost.match(/\{[^}]+\}/g) ?? [];
  return symbols.map((symbol, index) => {
    const value = symbol.slice(1, -1);
    const color: Record<string, string> = { W: "#f4e8c8", U: "#5b9bd5", B: "#44404a", R: "#d65b45", G: "#5b9563" };
    const fill = color[value] ?? "#c5c1b8";
    const cx = startX - (symbols.length - index - 1) * 34;
    const fontSize = value.length > 2 ? 10 : 13;
    return `<circle cx="${cx}" cy="${y}" r="14" fill="${fill}" stroke="#24211d" stroke-width="2"/><text x="${cx}" y="${y + 4}" text-anchor="middle" font-size="${fontSize}" font-weight="700" fill="#171717">${escapeXml(value)}</text>`;
  }).join("");
}

function rulesLines(text: string): string {
  const tokens = tokenizeRulesText(text);
  return tokens.map(token => token.kind === "symbol"
    ? `[${token.value}]`
    : token.kind === "newline" ? "\n" : token.value
  ).join("");
}

export function renderCardSvg(card: Card, faceIndex = 0): string {
  const face = card.faces?.[faceIndex];
  const name = face?.name ?? card.name;
  const manaCost = face?.manaCost ?? card.manaCost;
  const typeLine = face?.typeLine ?? card.typeLine;
  const oracleText = face?.oracleText ?? card.oracleText;
  const power = face?.power ?? card.power;
  const toughness = face?.toughness ?? card.toughness;
  const loyalty = face?.loyalty ?? card.loyalty;
  const imageUrl = face?.imageUrl ?? card.imageUrl;
  const color = card.colors.length > 1 ? "#77716a" : FRAME_COLORS[card.colors[0] ?? ""] ?? "#aaa49a";
  const rules = fitText(rulesLines(oracleText), {
    width: 590, height: 265, maxFontSize: 22, minFontSize: 11,
    lineHeightRatio: 1.18, paddingX: 0, paddingY: 2, measure: createCanvasTextMeasure()
  });
  const rulesSvg = rules.lines.map((line, index) =>
    `<text x="75" y="${715 + index * rules.lineHeight}" font-family="Georgia,serif" font-size="${rules.fontSize}" fill="#201d19">${escapeXml(line)}</text>`
  ).join("");
  const statsText = power !== undefined && toughness !== undefined ? `${power}/${toughness}` : loyalty ? `[${loyalty}]` : "";
  const stats = statsText
    ? `<rect x="585" y="950" width="110" height="58" rx="12" fill="#eee5d3" stroke="#332d25" stroke-width="4"/><text x="640" y="990" text-anchor="middle" font-size="30" font-weight="bold" fill="#201d19">${escapeXml(statsText)}</text>`
    : "";
  const overflow = rules.overflow
    ? `<text x="65" y="975" font-size="14" fill="#8a2e25">Texte trop long : réduire le texte ou adapter le cadre (${rules.overflowLines} ligne(s) hors zone)</text>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="750" height="1050" viewBox="0 0 750 1050">
    <defs><linearGradient id="paper" x2="0" y2="1"><stop stop-color="#f3ead8"/><stop offset="1" stop-color="#cfc2a9"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-opacity=".45"/></filter></defs>
    <rect x="12" y="12" width="726" height="1026" rx="34" fill="#25221e" filter="url(#shadow)"/>
    <rect x="28" y="28" width="694" height="994" rx="25" fill="${color}" stroke="#100f0e" stroke-width="5"/>
    <rect x="43" y="42" width="664" height="63" rx="12" fill="url(#paper)" stroke="#443b30" stroke-width="3"/>
    <text x="62" y="83" font-family="Georgia,serif" font-size="27" font-weight="bold" fill="#211d19">${escapeXml(name)}</text>
    ${manaPips(manaCost)}
    <rect x="49" y="119" width="652" height="500" rx="8" fill="#51483d" stroke="#28221b" stroke-width="5"/>
    ${imageUrl ? `<image href="${escapeXml(imageUrl)}" x="55" y="125" width="640" height="488" preserveAspectRatio="xMidYMid slice"/>` : `<rect x="55" y="125" width="640" height="488" fill="#6b6254"/><text x="375" y="375" text-anchor="middle" fill="#e7dfcf" font-size="24">Illustration non disponible</text>`}
    <rect x="48" y="632" width="654" height="50" rx="9" fill="url(#paper)" stroke="#443b30" stroke-width="3"/>
    <text x="64" y="665" font-family="Georgia,serif" font-size="23" font-weight="bold" fill="#211d19">${escapeXml(typeLine)}</text>
    <rect x="48" y="690" width="654" height="302" rx="10" fill="url(#paper)" stroke="#443b30" stroke-width="3"/>
    ${rulesSvg}
    ${overflow}
    ${stats}
  </svg>`;
}