/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import initHighlight from "./functions/initHighlight";
import initMobileMenu from "./functions/initMobileMenu";
import initTypeIt from "./functions/initTypeIt";
import TinyRouter from "./utils/TinyRouter";
import { PersonController, PersonModel, PersonView } from "./widgets/Person";
import initSimpleJekyllSearch from "./functions/initSimpleJekyllSearch";
import feather from "feather-icons";
import { PulseController, PulseView, PulseModel } from "./widgets/Pulse";

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

  // TinyRouter
  const router = new TinyRouter(location.pathname);

  // Register
  router
    .register("/", () => {
      new PersonController(new PersonView(), new PersonModel("maxqwars")).run();
    })
    .register("/search.html", () => {
      // new SearchController(new SearchView(), new SearchModel()).run();
    })
    .register("/pulse.html", () => {
      new PulseController(new PulseView(), new PulseModel()).run();
    })
    .run();
});
