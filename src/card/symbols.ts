export type RulesToken =
  | { kind: "text"; value: string }
  | { kind: "symbol"; value: string }
  | { kind: "newline"; value: "\n" };

const SYMBOL_PATTERN = /(\{[^{}]+\}|\r?\n)/g;

export function tokenizeRulesText(text: string): RulesToken[] {
  return text.split(SYMBOL_PATTERN).filter(Boolean).map(value => {
    if (value === "\n" || value === "\r\n") return { kind: "newline", value: "\n" };
    if (value.startsWith("{") && value.endsWith("}")) return { kind: "symbol", value: value.slice(1, -1) };
    return { kind: "text", value };
  });
}

export function symbolLabel(symbol: string): string {
  const labels: Record<string, string> = {
    T: "Engager", Q: "Dégager", W: "Blanc", U: "Bleu", B: "Noir",
    R: "Rouge", G: "Vert", C: "Incolore", X: "X"
  };
  return labels[symbol] ?? symbol;
}