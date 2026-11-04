export interface FramePreset {
  id: string;
  label: string;
  background: string;
  title: string;
  rules: string;
  border: string;
}

export const FRAME_PRESETS: Record<string, FramePreset> = {
  W: { id: "white", label: "Blanc", background: "#e7d9b7", title: "#f3ead8", rules: "#eee4cf", border: "#75664d" },
  U: { id: "blue", label: "Bleu", background: "#7da8c5", title: "#d8e5ec", rules: "#e2e9e9", border: "#3d617b" },
  B: { id: "black", label: "Noir", background: "#756d78", title: "#d6d1d7", rules: "#e3dfe3", border: "#3e3941" },
  R: { id: "red", label: "Rouge", background: "#c77b5f", title: "#f0d8c9", rules: "#f1dfd1", border: "#794735" },
  G: { id: "green", label: "Vert", background: "#829b72", title: "#e1e6d5", rules: "#e7e7d8", border: "#4a6540" },
  C: { id: "colorless", label: "Incolore", background: "#aaa49a", title: "#e8e3d9", rules: "#e8e3d9", border: "#6c665e" },
  M: { id: "multicolor", label: "Multicolore", background: "#b9a16e", title: "#eee2c5", rules: "#eee5d3", border: "#796440" }
};

export function getFramePreset(colors: string[]): FramePreset {
  if (colors.length > 1) return FRAME_PRESETS.M;
  return FRAME_PRESETS[colors[0] ?? "C"] ?? FRAME_PRESETS.C;
}
