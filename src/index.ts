import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";

export const diffLanguage = LRLanguage.define({
  parser: parser.configure({}),
});

export function diff() {
  return new LanguageSupport(diffLanguage);
}
