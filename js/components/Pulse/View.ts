import millify from "millify";

type PulseViewOptions = {
  containerId: string;
  cardTemplateId: string;
};

type PulseViewData = {
  description: string;
  name: string;
  stargazersCount: number;
  forks: number;
  license: string;
  language: string;
};

class PulseView {
  private _$card_template: any;
  private _$pinnedRepos: any;
  private _viewData: PulseViewData[] | null;
  private _icons: { [key: string]: string };

  constructor(options: PulseViewOptions) {
    // DOM
    // this.$card_template = document.querySelector("#pulse_repo_card_template");
    // this.$pinnedRepos = document.querySelector("#pinned_repos");

    this._$card_template = document.querySelector(options.cardTemplateId);
    this._$pinnedRepos = document.querySelector(options.containerId);

    // Data
    this._viewData = null;

    // Languages icons list
    this._icons = {
      unknown: "/assets/img/pulse/repo-icon.svg",
      sass: "/assets/img/pulse/repo-sass-icon.svg",
      javascript: "/assets/img/pulse/repo-javascript-icon.svg",
      typescript: "/assets/img/pulse/repo-typescript-icon.svg",
      dart: "/assets/img/pulse/repo-dart-icon.svg",
      php: "/assets/img/pulse/repo-php-icon.svg",
      python: "/assets/img/pulse/repo-python-icon.svg",
    };
  }

  private _cropDescription(desc: string): string {
    return desc.length > 35 ? desc.substring(0, 32) + "..." : desc;
  }

  _getLanguageIconUrl(lang) {
    let icon = "";
    switch (lang) {
      // sass / scss
      case "Sass":
        icon = this._icons["sass"];
        break;

      // javascript
      case "JavaScript":
        icon = this._icons["javascript"];
        break;

      // typescript
      case "TypeScript":
        icon = this._icons["typescript"];
        break;

      // dart
      case "Dart":
        icon = this._icons["dart"];
        break;

      // php
      case "PHP":
        icon = this._icons["php"];
        break;

      // python
      case "Python":
        icon = this._icons["python"];
        break;

      // unknown
      default:
        icon = this._icons["unknown"];
    }

    return icon;
  }

  private _createCard(data: PulseViewData) {
    // Clone template
    const $card = this._$card_template.content.cloneNode(true);

    // Get fragment elements
    const $projName = $card.querySelector("#proj_name");
    const $projDesc = $card.querySelector("#proj_desc");
    const $projStars = $card.querySelector("#proj_stars");
    const $projForks = $card.querySelector("#proj_forks");
    const $projLicense = $card.querySelector("#proj_license");
    const $icon = $card.querySelector("#proj_icon");

    // Insert data into elements
    $projDesc.textContent = this._cropDescription(data.description);
    $projName.textContent = data.name;
    $projStars.textContent = millify(data.stargazersCount);
    $projForks.textContent = millify(data.forks);
    $projLicense.textContent = data.license;
    $icon.src = this._getLanguageIconUrl(data.language);

    // Return document fragment
    return $card;
  }

  async render(viewData) {
    this._viewData = viewData;
    const elements = this._viewData.map((d) => this._createCard(d));
    for (let i = 0; i < this._viewData.length; i++) {
      this._$pinnedRepos.appendChild(elements[i]);
    }
  }
}

export default PulseView;
