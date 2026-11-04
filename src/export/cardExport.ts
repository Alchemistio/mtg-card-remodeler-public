import { jsPDF } from "jspdf";
import type { Card } from "../card/model";
import { renderCardSvg } from "../card/renderer";

function svgToImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Le rendu SVG n'a pas pu être converti.")); };
    image.src = url;
  });
}

export async function exportCardPng(card: Card, scale = 3): Promise<void> {
  const svg = renderCardSvg(card);
  const image = await svgToImage(svg);
  const canvas = document.createElement("canvas");
  canvas.width = 750 * scale;
  canvas.height = 1050 * scale;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas indisponible.");
  context.scale(scale, scale);
  context.drawImage(image, 0, 0, 750, 1050);
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

export async function exportCardPdf(card: Card): Promise<void> {
  const svg = renderCardSvg(card);
  const image = await svgToImage(svg);
  const canvas = document.createElement("canvas");
  canvas.width = 2250;
  canvas.height = 3150;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas indisponible.");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: [63.5, 88.9], compress: true });
  pdf.addImage(data, "PNG", 0, 0, 63.5, 88.9, undefined, "FAST");
  pdf.save(`${safeName(card.name)}.pdf`);
}

function safeName(name: string): string {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "carte";
}
