export default class PulseView {
  constructor() {
    this.$card_template = document.querySelector("#pulse_repo_card_template");
    this.viewData = [];
    this.$pinnedRepos = document.querySelector("#pinned_repos");
    this.icons = {
      unknown: "/assets/img/repo-icon.svg",
      sass: "/assets/img/repo-sass-icon.svg",
      javascript: "/assets/img/repo-javascript-icon.svg",
      typescript: "/assets/img/repo-typescript-icon.svg",
    };
    // console.log(this);
  }

  _createCard(data) {
    // Get template
    const $card = this.$card_template.content.cloneNode(true);

    console.log(data.language);

    // Get element
    const $projName = $card.querySelector("#proj_name");
    const $projDesc = $card.querySelector("#proj_desc");
    const $projStars = $card.querySelector("#proj_stars");
    const $projForks = $card.querySelector("#proj_forks");
    const $projLicense = $card.querySelector("#proj_license");
    const $icon = $card.querySelector("#proj_icon");

    // Insert data
    $projDesc.textContent = data.description;
    $projName.textContent = data.name;
    $projStars.textContent = data.stargazersCount;
    $projForks.textContent = data.forks;
    $projLicense.textContent = data.license;

    // Set icon
    switch (data.language) {
      case "Sass":
        $icon.src = this.icons.sass;
        break;
      case "JavaScript":
        $icon.src = this.icons.javascript;
        break;
      case "TypeScript":
        $icon.src = this.icons.typescript;
        break;
      default:
        $icon.src = this.icons.unknown;
    }

    return $card;
  }

  async render(viewData) {
    this.viewData = viewData;
    const elements = this.viewData.map((d) => this._createCard(d));
    for (let i = 0; i < this.viewData.length; i++) {
      this.$pinnedRepos.appendChild(elements[i]);
    }
  }
}
