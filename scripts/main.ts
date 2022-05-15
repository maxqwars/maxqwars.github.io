import TinyRouter from "./utils/TinyRouter";

/* Register service-worker */
if (navigator["serviceWorker"]) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/assets/js/sw.js");
  });
}

/* Init UI / UX */
async function initUI() {
  import("aos")
    .then((module) => module.default.init())
    .catch((e) => console.log(e));

  import("feather-icons")
    .then((module) => module.default.replace())
    .catch((e) => console.log(e));

  import("typeit")
    .then((module) => {
      const TypeIt = module.default;
      new TypeIt("#typing", { speed: 50, startDelay: 500 }).go();
    })
    .catch((e) => console.log(e));

  import("./functions/mobileNavigation")
    .then((module) => module.default())
    .catch((e) => console.log(e));

  import("./addons/initHighlight")
    .then((module) => module.default())
    .catch((e) => console.log(e));
}

/*
 * DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Init UI addons
  initUI();

  // Init "mini-apps"
  new TinyRouter(location.pathname)
    .add("/", () => {
      // Hero components
      import("./components/Hero")
        .then((hero) => {
          const { HeroController, HeroModel, HeroView } = hero;
          new HeroController(
            new HeroView({ containerId: "hero_widget" }),
            new HeroModel({ configUrl: "/config/hero.json" })
          ).run();
        })
        .catch((e) => console.log(e));
    })
    .add("/pulse.html", () => {
      // Pulse component
      import("./components/Pulse")
        .then((pulse) => {
          const { PulseController, PulseModel, PulseView } = pulse;
          new PulseController(
            new PulseView({
              cardTemplateId: "#pulse_repo_card_template",
              containerId: "#pinned_repos",
            }),
            new PulseModel({ configUrl: "/config/pulse.json" })
          ).run();
        })
        .catch((e) => console.log(e));
    })
    .run();
});
