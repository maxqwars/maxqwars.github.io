import bash from "highlight.js/lib/languages/bash";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";

export default async function () {
  /* Register languages */
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("bash", bash);

  /* Activate highlight.js */
  document.querySelectorAll<HTMLElement>("pre code").forEach((el) => {
    hljs.highlightElement(el);
  });
}
