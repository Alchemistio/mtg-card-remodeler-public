import { tokenizeRulesText } from "./symbols";
import { createCanvasTextMeasure, type TextMeasure } from "./typography";

export type RuleRun =
  | { kind: "text"; value: string; width: number }
  | { kind: "symbol"; value: string; width: number };

export interface RuleLine { runs: RuleRun[]; width: number }
export interface RulesLayout {
  lines: RuleLine[];
  fontSize: number;
  lineHeight: number;
  overflow: boolean;
  overflowLines: number;
}

export interface RulesLayoutOptions {
  width: number;
  height: number;
  maxFontSize?: number;
  minFontSize?: number;
  lineHeightRatio?: number;
  fontFamily?: string;
  measure?: TextMeasure;
}

export function manaColor(symbol: string): string {
  const base = symbol.split("/")[0].replace(/[0-9]/g, "");
  const colors: Record<string, string> = {
    W: "#f2e8cf", U: "#5b9bd5", B: "#46414b", R: "#d65b45",
    G: "#659363", C: "#c5c1b8", S: "#b8cbd0", E: "#e4c85c",
    T: "#cbb98f", Q: "#cbb98f", X: "#d4c8a8"
  };
  return colors[base] ?? "#c5c1b8";
}

function splitText(value: string): string[] {
  return value.split(/(\s+)/).filter(Boolean);
}

function wrapAtFontSize(
  text: string, width: number, fontSize: number, fontFamily: string, measure: TextMeasure
): RuleLine[] {
  const tokens = tokenizeRulesText(text);
  const lines: RuleLine[] = [];
  let runs: RuleRun[] = [];
  let lineWidth = 0;
  const pushLine = () => {
    lines.push({ runs, width: lineWidth });
    runs = [];
    lineWidth = 0;
  };
  const addText = (value: string) => {
    const parts = splitText(value);
    for (const part of parts) {
      if (/^\s+$/.test(part) && runs.length === 0) continue;
      const partWidth = measure(part, fontSize, fontFamily);
      if (lineWidth + partWidth > width && runs.length > 0) {
        pushLine();
        if (/^\s+$/.test(part)) continue;
      }
      if (partWidth > width) {
        for (const char of part) {
          const charWidth = measure(char, fontSize, fontFamily);
          if (lineWidth + charWidth > width && runs.length > 0) pushLine();
          runs.push({ kind: "text", value: char, width: charWidth });
          lineWidth += charWidth;
        }
      } else {
        runs.push({ kind: "text", value: part, width: partWidth });
        lineWidth += partWidth;
      }
    }
  };
  for (const token of tokens) {
    if (token.kind === "newline") {
      pushLine();
    } else if (token.kind === "text") {
      addText(token.value);
    } else {
      const symbolWidth = fontSize * 1.08;
      if (lineWidth + symbolWidth > width && runs.length > 0) pushLine();
      runs.push({ kind: "symbol", value: token.value, width: symbolWidth });
      lineWidth += symbolWidth;
    }
  }
  if (runs.length > 0 || lines.length === 0) pushLine();
  return lines;
}

export function layoutRulesText(text: string, options: RulesLayoutOptions): RulesLayout {
  const {
    width, height, maxFontSize = 22, minFontSize = 10, lineHeightRatio = 1.18,
    fontFamily = "Georgia,serif", measure = createCanvasTextMeasure()
  } = options;
  let low = minFontSize;
  let high = maxFontSize;
  let best = wrapAtFontSize(text, width, minFontSize, fontFamily, measure);
  let bestSize = minFontSize;
  for (let i = 0; i < 14; i++) {
    const size = (low + high) / 2;
    const candidate = wrapAtFontSize(text, width, size, fontFamily, measure);
    if (candidate.length * size * lineHeightRatio <= height) {
      best = candidate;
      bestSize = size;
      low = size;
    } else high = size;
  }
  const lineHeight = bestSize * lineHeightRatio;
  const maxLines = Math.floor(height / lineHeight);
  const overflow = best.length > maxLines;
  return {
    lines: best,
    fontSize: Number(bestSize.toFixed(2)),
    lineHeight: Number(lineHeight.toFixed(2)),
    overflow,
    overflowLines: Math.max(0, best.length - maxLines)
  };
}

export function renderRulesLayoutSvg(
  layout: RulesLayout, x: number, y: number, fontFamily = "Georgia,serif"
): string {
  return layout.lines.map((line, lineIndex) => {
    let cursor = x;
    const baseline = y + lineIndex * layout.lineHeight;
    const runs = line.runs.map(run => {
      const start = cursor;
      cursor += run.width;
      if (run.kind === "text") {
        return `<text x="${start}" y="${baseline}" font-family="${fontFamily}" font-size="${layout.fontSize}" fill="#201d19">${escapeXml(run.value)}</text>`;
      }
      const radius = layout.fontSize * 0.46;
      const cy = baseline - layout.fontSize * 0.36;
      const fill = manaColor(run.value);
      const label = run.value.length > 3 ? run.value.slice(0, 3) : run.value;
      const labelSize = label.length > 2 ? layout.fontSize * 0.36 : layout.fontSize * 0.52;
      return `<circle cx="${start + run.width / 2}" cy="${cy}" r="${radius}" fill="${fill}" stroke="#38332c" stroke-width="1.3"/><text x="${start + run.width / 2}" y="${cy + labelSize * 0.34}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${labelSize}" font-weight="bold" fill="#1d1b18">${escapeXml(label)}</text>`;
    }).join("");
    return runs;
  }).join("");
}

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  })[char] ?? char);
}
