import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

export default async function () {
  /* Register languages */
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("html", xml);

  /* Init */
  document
    .querySelectorAll<HTMLElement>(".highlighter-rouge")
    .forEach((element) => {
      const language = element.classList[0];
      const code = element.querySelector("code");

      if (code !== null) {
        code.classList.add(language);
        hljs.highlightElement(code);
      }
    });
}
