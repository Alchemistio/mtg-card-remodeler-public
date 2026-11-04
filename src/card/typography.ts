export interface TextMeasure {
  (text: string, fontSize: number, fontFamily: string): number;
}

export interface TextLayoutOptions {
  width: number;
  height: number;
  fontFamily?: string;
  maxFontSize?: number;
  minFontSize?: number;
  lineHeightRatio?: number;
  paddingX?: number;
  paddingY?: number;
  measure?: TextMeasure;
}

export interface TextLayout {
  lines: string[];
  fontSize: number;
  lineHeight: number;
  overflow: boolean;
  overflowLines: number;
  usedHeight: number;
}

const approximateMeasure: TextMeasure = (text, fontSize) => [...text].reduce((sum, char) => {
  if (" il.,'!:;|".includes(char)) return sum + fontSize * 0.27;
  if ("MW@%".includes(char)) return sum + fontSize * 0.82;
  return sum + fontSize * 0.53;
}, 0);

export function wrapText(text: string, maxWidth: number, fontSize: number, fontFamily = "Georgia,serif", measure: TextMeasure = approximateMeasure): string[] {
  const paragraphs = text.replace(/\r\n/g, "\n").split("\n");
  const output: string[] = [];
  for (const paragraph of paragraphs) {
    if (!paragraph.trim()) { output.push(""); continue; }
    const words = paragraph.split(/\s+/);
    let line = "";
    for (const word of words) {
      const candidate = line ? line + " " + word : word;
      if (line && measure(candidate, fontSize, fontFamily) > maxWidth) {
        output.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) output.push(line);
  }
  return output;
}

export function fitText(text: string, options: TextLayoutOptions): TextLayout {
  const {
    width, height, fontFamily = "Georgia,serif", maxFontSize = 22, minFontSize = 10,
    lineHeightRatio = 1.18, paddingX = 0, paddingY = 0, measure = approximateMeasure
  } = options;
  const usableWidth = Math.max(1, width - paddingX * 2);
  const usableHeight = Math.max(1, height - paddingY * 2);
  let low = minFontSize;
  let high = maxFontSize;
  let best = wrapText(text, usableWidth, minFontSize, fontFamily, measure);
  let bestSize = minFontSize;
  for (let iteration = 0; iteration < 14; iteration++) {
    const candidate = (low + high) / 2;
    const lines = wrapText(text, usableWidth, candidate, fontFamily, measure);
    const lineHeight = candidate * lineHeightRatio;
    if (lines.length * lineHeight <= usableHeight) {
      best = lines; bestSize = candidate; low = candidate;
    } else high = candidate;
  }
  const lineHeight = bestSize * lineHeightRatio;
  const usedHeight = best.length * lineHeight;
  return {
    lines: best, fontSize: Number(bestSize.toFixed(2)), lineHeight: Number(lineHeight.toFixed(2)),
    overflow: usedHeight > usableHeight || best.some(line => measure(line, bestSize, fontFamily) > usableWidth),
    overflowLines: Math.max(0, best.length - Math.floor(usableHeight / lineHeight)),
    usedHeight: Number(usedHeight.toFixed(2))
  };
}

export function createCanvasTextMeasure(): TextMeasure {
  if (typeof document === "undefined") return approximateMeasure;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return approximateMeasure;
  return (text, size, family) => {
    context.font = `${size}px ${family}`;
    return context.measureText(text).width;
  };
}
