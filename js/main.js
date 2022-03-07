/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import initHighlight from "./functions/initHighlight";
import initMobileMenu from "./functions/initMobileMenu";
import initTypeIt from "./functions/initTypeIt";
import TinyRouter from "./utils/TinyRouter";
import initSimpleJekyllSearch from "./functions/initSimpleJekyllSearch";
import feather from "feather-icons";

/* -------------------------------------------------------------------------- */
/*                           Register service-worker                          */
/* -------------------------------------------------------------------------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/assets/js/sw.js");
  });
}

/* -------------------------------------------------------------------------- */
/*                              DOMContentLoaded                              */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // UI / UX
  initMobileMenu(); // Init Bulma mobile navigation
  initTypeIt("#typing"); // Init TypeIt
  initHighlight(); // Init Highlight.js, source code highlighter
  initSimpleJekyllSearch(); // Jekyll search
  feather.replace(); // Feather icons

  new TinyRouter(location.pathname)
    .register("/", () => {
      import("./widgets/Hero").then(
        ({ HeroController, HeroView, HeroModel }) => {
          new HeroController(new HeroView(), new HeroModel()).run();
        }
      );
    })
    .register("/pulse.html", () => {
      import("./widgets/Pulse").then(
        ({ PulseController, PulseModel, PulseView }) => {
          new PulseController(new PulseView(), new PulseModel()).run();
        }
      );
    })
    .run();
});
