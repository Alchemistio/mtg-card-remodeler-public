export type AssetKind = "frame" | "texture" | "symbol" | "font" | "mask";

export interface AssetDescriptor {
  id: string;
  kind: AssetKind;
  label: string;
  path: string;
  license: "user-provided" | "open-license" | "project-generated";
  attribution?: string;
}

export const ASSET_MANIFEST: AssetDescriptor[] = [
  { id: "frame-neutral", kind: "frame", label: "Cadre neutre", path: "assets/frames/neutral.svg", license: "project-generated" },
  { id: "frame-white", kind: "frame", label: "Cadre blanc", path: "assets/frames/white.svg", license: "project-generated" },
  { id: "frame-blue", kind: "frame", label: "Cadre bleu", path: "assets/frames/blue.svg", license: "project-generated" },
  { id: "frame-black", kind: "frame", label: "Cadre noir", path: "assets/frames/black.svg", license: "project-generated" },
  { id: "frame-red", kind: "frame", label: "Cadre rouge", path: "assets/frames/red.svg", license: "project-generated" },
  { id: "frame-green", kind: "frame", label: "Cadre vert", path: "assets/frames/green.svg", license: "project-generated" }
];

export function findAssets(kind?: AssetKind): AssetDescriptor[] {
  return kind ? ASSET_MANIFEST.filter(asset => asset.kind === kind) : [...ASSET_MANIFEST];
}

export function validateAssetPath(path: string): boolean {
  return !path.startsWith("/") && !path.split("/").includes("..") && !path.includes("\\");
}
