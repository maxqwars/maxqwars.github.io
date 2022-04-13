import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";

export default async function () {
  // Register languages
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("bash", bash);

  // Activate highlight.js
  document.querySelectorAll("pre code").forEach((el) => {
    hljs.highlightElement(el);
  });
}
