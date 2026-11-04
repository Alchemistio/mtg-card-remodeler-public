import { jsPDF } from "jspdf";
import type { Card } from "../card/model";
import type { CardOverrides } from "../card/customization";
import { renderCardSvg } from "../card/renderer";

function safeName(name: string): string {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "carte";
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("Conversion d'image impossible."));
    reader.onerror = () => reject(new Error("Lecture de l'image impossible."));
    reader.readAsDataURL(blob);
  });
}

async function makeSvgSelfContained(svg: string): Promise<string> {
  const hrefs = [...svg.matchAll(/<image\b[^>]*href="([^"]+)"/g)].map(match => match[1].replace(/&amp;/g, "&"));
  const unique = [...new Set(hrefs)];
  let output = svg;
  for (const href of unique) {
    const response = await fetch(href, { mode: "cors" });
    if (!response.ok) throw new Error(`Impossible de récupérer l'illustration distante (${response.status}).`);
    const dataUrl = await blobToDataUrl(await response.blob());
    output = output.replaceAll(`href="${href.replace(/&/g, "&amp;")}"`, `href="${dataUrl}"`);
  }
  return output;
}

async function svgToImage(svg: string): Promise<HTMLImageElement> {
  const image = new Image();
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Le rendu SVG n'a pas pu être converti en image.")); };
    image.src = url;
  });
}

function canvasFromImage(image: HTMLImageElement, width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas indisponible.");
  context.drawImage(image, 0, 0, width, height);
  return canvas;
}

export async function exportCardSvg(card: Card, faceIndex = 0, overrides: CardOverrides = {}): Promise<void> {
  const svg = await makeSvgSelfContained(renderCardSvg(card, faceIndex, overrides));
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${safeName(card.name)}.svg`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function exportCardPng(card: Card, scale = 3, faceIndex = 0, overrides: CardOverrides = {}): Promise<void> {
  const svg = await makeSvgSelfContained(renderCardSvg(card, faceIndex, overrides));
  const image = await svgToImage(svg);
  const canvas = canvasFromImage(image, 750 * scale, 1050 * scale);
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(result => result ? resolve(result) : reject(new Error("Export PNG impossible.")), "image/png")
  );
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${safeName(card.name)}-${scale}x.png`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export interface PdfExportOptions {
  bleedMm?: number;
  cropMarks?: boolean;
}

function createBleedCanvas(source: HTMLCanvasElement, bleedPixels: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = source.width + bleedPixels * 2;
  canvas.height = source.height + bleedPixels * 2;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas indisponible pour le fond perdu.");

  context.fillStyle = "#25221e";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const inset = Math.min(12, Math.floor(Math.min(source.width, source.height) / 20));
  const width = source.width;
  const height = source.height;
  context.drawImage(source, bleedPixels, bleedPixels);

  // Extend the frame edge into the bleed instead of leaving transparent pixels.
  context.drawImage(source, 0, inset, width, 1, bleedPixels, 0, width, bleedPixels);
  context.drawImage(source, 0, height - inset - 1, width, 1, bleedPixels, bleedPixels + height, width, bleedPixels);
  context.drawImage(source, inset, 0, 1, height, 0, bleedPixels, bleedPixels, height);
  context.drawImage(source, width - inset - 1, 0, 1, height, bleedPixels + width, bleedPixels, bleedPixels, height);

  context.drawImage(source, inset, inset, 1, 1, 0, 0, bleedPixels, bleedPixels);
  context.drawImage(source, width - inset - 1, inset, 1, 1, bleedPixels + width, 0, bleedPixels, bleedPixels);
  context.drawImage(source, inset, height - inset - 1, 1, 1, 0, bleedPixels + height, bleedPixels, bleedPixels);
  context.drawImage(source, width - inset - 1, height - inset - 1, 1, 1, bleedPixels + width, bleedPixels + height, bleedPixels, bleedPixels);
  return canvas;
}

function addCropMarks(
  pdf: jsPDF, trimX: number, trimY: number, trimWidth: number, trimHeight: number, margin: number, bleed: number
): void {
  const length = Math.max(2.5, margin - 1);
  const left = trimX;
  const right = trimX + trimWidth;
  const top = trimY;
  const bottom = trimY + trimHeight;
  const imageLeft = left - bleed;
  const imageRight = right + bleed;
  const imageTop = top - bleed;
  const imageBottom = bottom + bleed;
  const leftEnd = imageLeft - 0.5;
  const rightStart = imageRight + 0.5;
  const topEnd = imageTop - 0.5;
  const bottomStart = imageBottom + 0.5;
  pdf.setDrawColor(20, 20, 20);
  pdf.setLineWidth(0.15);

  // Marks stay outside the bleed area and align with the trim rectangle.
  pdf.line(Math.max(0.5, leftEnd - length), top, leftEnd, top);
  pdf.line(left, Math.max(0.5, topEnd - length), left, topEnd);
  pdf.line(rightStart, top, rightStart + length, top);
  pdf.line(right, Math.max(0.5, topEnd - length), right, topEnd);
  pdf.line(Math.max(0.5, leftEnd - length), bottom, leftEnd, bottom);
  pdf.line(left, bottomStart, left, bottomStart + length);
  pdf.line(rightStart, bottom, rightStart + length, bottom);
  pdf.line(right, bottomStart, right, bottomStart + length);
}

export async function exportCardPdf(
  card: Card, faceIndex = 0, overrides: CardOverrides = {}, options: PdfExportOptions = {}
): Promise<void> {
  const bleedMm = Math.max(0, Math.min(5, options.bleedMm ?? 3));
  const cropMarks = options.cropMarks ?? true;
  const marginMm = cropMarks ? 5 : 0;
  const trimWidth = 63.5;
  const trimHeight = 88.9;
  const dpi = 900;
  const bleedPixels = Math.round(bleedMm * dpi / 25.4);

  const svg = await makeSvgSelfContained(renderCardSvg(card, faceIndex, overrides));
  const image = await svgToImage(svg);
  const cardCanvas = canvasFromImage(image, 2250, 3150);
  const printCanvas = bleedPixels > 0 ? createBleedCanvas(cardCanvas, bleedPixels) : cardCanvas;
  const data = printCanvas.toDataURL("image/png");

  const imageWidth = trimWidth + bleedMm * 2;
  const imageHeight = trimHeight + bleedMm * 2;
  const pageWidth = imageWidth + marginMm * 2;
  const pageHeight = imageHeight + marginMm * 2;
  const imageX = marginMm;
  const imageY = marginMm;
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: [pageWidth, pageHeight], compress: true });
  pdf.addImage(data, "PNG", imageX, imageY, imageWidth, imageHeight, undefined, "FAST");

  if (cropMarks) {
    addCropMarks(pdf, imageX + bleedMm, imageY + bleedMm, trimWidth, trimHeight, marginMm, bleedMm);
  }
  pdf.save(`${safeName(card.name)}-print.pdf`);
}
