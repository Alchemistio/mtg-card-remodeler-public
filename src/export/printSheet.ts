import type { Card } from "../card/model";
import { renderCardSvg } from "../card/renderer";
import type { CardOverrides } from "../card/customization";

export type PaperPreset = "A4" | "A3" | "Letter" | "Legal" | "Custom";
export interface PrintSheetSettings {
  paper: PaperPreset;
  customWidthMm: number;
  customHeightMm: number;
  orientation: "portrait" | "landscape";
  marginTopMm: number;
  marginRightMm: number;
  marginBottomMm: number;
  marginLeftMm: number;
  gutterMm: number;
  columns: number;
  rows: number;
  cardWidthMm: number;
  cardHeightMm: number;
  bleedMm: number;
  cropMarks: boolean;
  dpi: number;
  centerGrid: boolean;
}
export const DEFAULT_PRINT_SETTINGS: PrintSheetSettings = {
  paper: "A4", customWidthMm: 210, customHeightMm: 297, orientation: "portrait",
  marginTopMm: 2, marginRightMm: 2, marginBottomMm: 2, marginLeftMm: 2,
  gutterMm: 1, columns: 3, rows: 3, cardWidthMm: 63.5, cardHeightMm: 88.9,
  bleedMm: 1, cropMarks: true, dpi: 600, centerGrid: true
};
const PAPER: Record<Exclude<PaperPreset, "Custom">, [number, number]> = {
  A4: [210, 297], A3: [297, 420], Letter: [215.9, 279.4], Legal: [215.9, 355.6]
};
export interface SheetGeometry {
  pageWidthMm: number; pageHeightMm: number; columns: number; rows: number;
  cardWidthMm: number; cardHeightMm: number; startX: number; startY: number;
  stepX: number; stepY: number; cardsPerPage: number;
}
export function getSheetGeometry(settings: PrintSheetSettings): SheetGeometry {
  let [pageWidthMm, pageHeightMm] = settings.paper === "Custom"
    ? [settings.customWidthMm, settings.customHeightMm] : PAPER[settings.paper];
  if (settings.orientation === "landscape") [pageWidthMm, pageHeightMm] = [pageHeightMm, pageWidthMm];
  const columns = Math.max(1, Math.min(12, Math.floor(settings.columns)));
  const rows = Math.max(1, Math.min(12, Math.floor(settings.rows)));
  const cardWidthMm = Math.max(10, settings.cardWidthMm);
  const cardHeightMm = Math.max(10, settings.cardHeightMm);
  const gutter = Math.max(0, settings.gutterMm);
  const bleed = Math.max(0, Math.min(5, settings.bleedMm));
  const gridWidth = columns * (cardWidthMm + bleed * 2) + (columns - 1) * gutter;
  const gridHeight = rows * (cardHeightMm + bleed * 2) + (rows - 1) * gutter;
  const usableWidth = pageWidthMm - settings.marginLeftMm - settings.marginRightMm;
  const usableHeight = pageHeightMm - settings.marginTopMm - settings.marginBottomMm;
  if (gridWidth > usableWidth + 0.01 || gridHeight > usableHeight + 0.01) {
    throw new Error("La grille ne tient pas dans le papier choisi. Réduis les cartes, les marges ou le nombre de colonnes/lignes.");
  }
  const startX = (settings.centerGrid
    ? settings.marginLeftMm + (usableWidth - gridWidth) / 2
    : settings.marginLeftMm) + bleed;
  const startY = (settings.centerGrid
    ? settings.marginTopMm + (usableHeight - gridHeight) / 2
    : settings.marginTopMm) + bleed;
  return { pageWidthMm, pageHeightMm, columns, rows, cardWidthMm, cardHeightMm, startX, startY, stepX: cardWidthMm + bleed * 2 + gutter, stepY: cardHeightMm + bleed * 2 + gutter, cardsPerPage: columns * rows };
}
async function imageForCard(card: Card, dpi: number, bleedMm: number, cardWidthMm: number, cardHeightMm: number, overrides: CardOverrides = {}): Promise<string> {
  const svg = renderCardSvg(card, 0, overrides);
  const matches = [...svg.matchAll(/<image\b[^>]*href="([^"]+)"/g)];
  let output = svg;
  for (const match of matches) {
    const href = match[1].replace(/&amp;/g, "&");
    if (href.startsWith("data:")) continue;
    const response = await fetch(href, { mode: "cors" });
    if (!response.ok) throw new Error(`Impossible de charger l'illustration de ${card.name}.`);
    const blobData = await response.blob();
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("Image illisible."));
      reader.onerror = () => reject(new Error("Image illisible."));
      reader.readAsDataURL(blobData);
    });
    output = output.replace(match[1], data);
  }
  const blob = new Blob([output], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  try {
    image.src = url;
    await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error(`Le rendu de ${card.name} a échoué.`)); });
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(settingsDpiWidth(cardWidthMm, dpi));
    canvas.height = Math.round(settingsDpiWidth(cardHeightMm, dpi));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas indisponible.");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return createBleed(canvas, Math.round(bleedMm / 25.4 * dpi)).toDataURL("image/png");
  } finally { URL.revokeObjectURL(url); }
}
function settingsDpiWidth(mm: number, dpi: number) { return mm / 25.4 * dpi; }
function createBleed(source: HTMLCanvasElement, pixels: number): HTMLCanvasElement {
  if (pixels <= 0) return source;
  const canvas = document.createElement("canvas");
  canvas.width = source.width + pixels * 2; canvas.height = source.height + pixels * 2;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas indisponible pour le fond perdu.");
  context.drawImage(source, pixels, pixels);
  const inset = Math.min(12, Math.floor(Math.min(source.width, source.height) / 20));
  context.drawImage(source, 0, inset, source.width, 1, pixels, 0, source.width, pixels);
  context.drawImage(source, 0, source.height - inset - 1, source.width, 1, pixels, pixels + source.height, source.width, pixels);
  context.drawImage(source, inset, 0, 1, source.height, 0, pixels, pixels, source.height);
  context.drawImage(source, source.width - inset - 1, 0, 1, source.height, pixels + source.width, pixels, pixels, source.height);
  context.drawImage(source, inset, inset, 1, 1, 0, 0, pixels, pixels);
  context.drawImage(source, source.width - inset - 1, inset, 1, 1, pixels + source.width, 0, pixels, pixels);
  context.drawImage(source, inset, source.height - inset - 1, 1, 1, 0, pixels + source.height, pixels, pixels);
  context.drawImage(source, source.width - inset - 1, source.height - inset - 1, 1, 1, pixels + source.width, pixels + source.height, pixels, pixels);
  return canvas;
}
function addMarks(pdf: any, x: number, y: number, width: number, height: number, bleed: number) {
  const gap = Math.max(1, bleed + 1.2);
  const len = 3;
  const left = x, right = x + width, top = y, bottom = y + height;
  pdf.setDrawColor(15, 15, 15); pdf.setLineWidth(0.12);
  for (const xx of [left, right]) {
    pdf.line(xx, top - bleed - gap, xx, top - bleed - gap - len);
    pdf.line(xx, bottom + bleed + gap, xx, bottom + bleed + gap + len);
  }
  for (const yy of [top, bottom]) {
    pdf.line(left - bleed - gap, yy, left - bleed - gap - len, yy);
    pdf.line(right + bleed + gap, yy, right + bleed + gap + len, yy);
  }
}
export async function exportPrintSheetPdf(
  cards: Array<{ card: Card; quantity?: number; overrides?: CardOverrides }>,
  settings: PrintSheetSettings,
  onProgress?: (done: number, total: number) => void
): Promise<void> {
  const geometry = getSheetGeometry(settings);
  const expanded = cards.flatMap(entry => Array.from({ length: Math.max(1, Math.min(999, entry.quantity ?? 1)) }, () => entry));
  if (!expanded.length) throw new Error("Ajoute au moins une carte avant l'export.");
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: settings.orientation, unit: "mm", format: [geometry.pageWidthMm, geometry.pageHeightMm], compress: true });
  const bleed = Math.max(0, Math.min(5, settings.bleedMm));
  const cache = new Map<string, string>();
  for (let i = 0; i < expanded.length; i++) {
    const entry = expanded[i];
    const key = entry.card.id;
    let image = cache.get(key);
    if (!image) {
      image = await imageForCard(entry.card, settings.dpi, bleed, geometry.cardWidthMm, geometry.cardHeightMm, entry.overrides);
      cache.set(key, image);
    }
    if (i > 0 && i % geometry.cardsPerPage === 0) pdf.addPage([geometry.pageWidthMm, geometry.pageHeightMm], settings.orientation);
    const slot = i % geometry.cardsPerPage;
    const col = slot % geometry.columns;
    const row = Math.floor(slot / geometry.columns);
    const x = geometry.startX + col * geometry.stepX;
    const y = geometry.startY + row * geometry.stepY;
    pdf.addImage(image, "PNG", x - bleed, y - bleed, geometry.cardWidthMm + bleed * 2, geometry.cardHeightMm + bleed * 2, undefined, "FAST");
    if (settings.cropMarks) addMarks(pdf, x, y, geometry.cardWidthMm, geometry.cardHeightMm, bleed);
    onProgress?.(i + 1, expanded.length);
  }
  pdf.save("mtg-card-remodeller-planche-impression.pdf");
}
