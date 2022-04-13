/* Register service-worker */
if (navigator["serviceWorker"]) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/assets/js/sw.js");
  });
}

/* Init UI / UX */
function initUI() {
  /* AOS - Animation on scroll */
  import("aos")
    .then((module) => module.default.init())
    .catch((e) => console.log(e));

  /* Feather Icons */
  import("feather-icons")
    .then((module) => module.default.replace())
    .catch((e) => console.log(e));

  /* TypeIt */
  import("typeit")
    .then((module) => {
      const TypeIt = module.default;
      new TypeIt("#typing", { speed: 50, startDelay: 500 }).go();
    })
    .catch((e) => console.log(e));

  /* Bulma mobile menu */
  import("./functions/mobileNavigation")
    .then((module) => module.default())
    .catch((e) => console.log(e));
}

/* HTML content loaded */
document.addEventListener("DOMContentLoaded", () => {
  initUI();
});
