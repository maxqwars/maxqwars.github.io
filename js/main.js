import initMenu from "./functions/initMenu";
import typeIt from "./functions/typeIt";

import CacheService from "./services/CacheService";

// HomePage
import HomePageController from "./controllers/HomePageController";
import HomePageView from "./views/HomePageView";
import HomePageModel from "./models/HomePageModel";

/* Register service worker */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/assets/js/sw.js");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  typeIt("#typing");

  switch (location.pathname) {
    case "/":
      const hpc = new HomePageController(
        new HomePageView(),
        new HomePageModel("maxqwars", CacheService)
      );
      hpc.run();
      break;

    default:
      console.log("Not found controller for:", location.pathname);
  }
});
