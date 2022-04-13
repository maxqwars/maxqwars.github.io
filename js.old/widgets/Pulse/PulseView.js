import millify from 'millify'

export default class PulseView {
  constructor() {
    // DOM
    this.$card_template = document.querySelector("#pulse_repo_card_template");
    this.$pinnedRepos = document.querySelector("#pinned_repos");

    // Data
    this.viewData = [];

    // Languages icons list
    this.icons = {
      unknown: "/assets/img/pulse/repo-icon.svg",
      sass: "/assets/img/pulse/repo-sass-icon.svg",
      javascript: "/assets/img/pulse/repo-javascript-icon.svg",
      typescript: "/assets/img/pulse/repo-typescript-icon.svg",
      dart: "/assets/img/pulse/repo-dart-icon.svg",
      php: "/assets/img/pulse/repo-php-icon.svg",
      python: "/assets/img/pulse/repo-python-icon.svg",
    };
  }

  _beforeDescAssign(desc) {
    return desc.length > 35 ? desc.substr(0, 32) + "..." : desc;
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
    $projStars.textContent = millify(data.stargazersCount);
    $projForks.textContent = millify(data.forks);
    $projLicense.textContent = data.license;
    $icon.src = this._getLanguageIconUrl(data.language);

    // Return document fragment
    return $card;
  }

  // Render
  async render(viewData) {
    this.viewData = viewData;
    const elements = this.viewData.map((d) => this._createCard(d));
    for (let i = 0; i < this.viewData.length; i++) {
      this.$pinnedRepos.appendChild(elements[i]);
    }
  }
}
