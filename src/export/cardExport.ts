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

export async function exportCardPdf(card: Card, faceIndex = 0, overrides: CardOverrides = {}): Promise<void> {
  const svg = await makeSvgSelfContained(renderCardSvg(card, faceIndex, overrides));
  const image = await svgToImage(svg);
  const canvas = canvasFromImage(image, 2250, 3150);
  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: [63.5, 88.9], compress: true });
  pdf.addImage(data, "PNG", 0, 0, 63.5, 88.9, undefined, "FAST");
  pdf.save(`${safeName(card.name)}.pdf`);
}
