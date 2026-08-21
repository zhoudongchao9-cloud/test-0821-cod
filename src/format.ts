import { parse } from "./parser";

export function format(input: string): string {
  return Object.entries(parse(input)).map(([k, v]) => `${k}: ${v}`).join("\n");
}
