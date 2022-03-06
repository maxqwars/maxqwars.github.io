export default class PulseView {
  constructor() {
    // DOM
    this.$card_template = document.querySelector("#pulse_repo_card_template");
    this.$pinnedRepos = document.querySelector("#pinned_repos");

    // Data
    this.viewData = [];

    // Languages icons list
    this.icons = {
      unknown: "/assets/img/repo-icon.svg",
      sass: "/assets/img/repo-sass-icon.svg",
      javascript: "/assets/img/repo-javascript-icon.svg",
      typescript: "/assets/img/repo-typescript-icon.svg",
      dart: "/assets/img/repo-dart-icon.svg",
      php: "/assets/img/repo-php-icon.svg",
      python: "/assets/img/repo-python-icon.svg",
    };
  }

  _beforeDescAssign(desc) {
    return desc;
  }

  _getLanguageIconUrl(lang) {
    let icon = "";
    switch (lang) {
      // sass / scss
      case "Sass":
        icon = this.icons.sass;
        break;

      // javascript
      case "JavaScript":
        icon = this.icons.javascript;
        break;

      // typescript
      case "TypeScript":
        icon = this.icons.typescript;
        break;

      // dart
      case "Dart":
        icon = this.icons.dart;
        break;

      // php
      case "PHP":
        icon = this.icons.php;
        break;

      // python
      case "Python":
        icon = this.icons.python;
        break;

      // unknown
      default:
        icon = this.icons.unknown;
    }

    return icon;
  }

  _createCard(data) {
    // Clone template
    const $card = this.$card_template.content.cloneNode(true);

    // Get fragment elements
    const $projName = $card.querySelector("#proj_name");
    const $projDesc = $card.querySelector("#proj_desc");
    const $projStars = $card.querySelector("#proj_stars");
    const $projForks = $card.querySelector("#proj_forks");
    const $projLicense = $card.querySelector("#proj_license");
    const $icon = $card.querySelector("#proj_icon");

    // Insert data into elements
    $projDesc.textContent = this._beforeDescAssign(data.description);
    $projName.textContent = data.name;
    $projStars.textContent = data.stargazersCount;
    $projForks.textContent = data.forks;
    $projLicense.textContent = data.license;
    $icon.src = this._getLanguageIconUrl(data.language);

    // Return document fragment
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
