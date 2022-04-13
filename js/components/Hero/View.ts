type HeroViewOptions = {
  containerId: string;
};

type HeroViewData = {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  twitterUsername: string;
  following: number;
  followers: number;
  publicRepos: number;
  location: string;
  publicGists: number;
  company: string | null;
  hirable: boolean | null;
};

export default class HeroView {
  $heroWidget: HTMLElement;
  $userImage: HTMLImageElement;
  $userName: HTMLElement;
  $userLogin: HTMLElement;
  $userBio: HTMLElement;
  $userTwitter: HTMLElement;
  $userFollowers: HTMLElement;
  $userFollowing: HTMLElement;
  $userRepositories: HTMLElement;
  $isHirable: HTMLElement;
  $userLocation: HTMLElement;
  $userGists: HTMLElement;
  $userCompany: HTMLElement;
  viewData: HeroViewData | undefined;

  constructor(options: HeroViewOptions) {
    // Get container
    this.$heroWidget = document.getElementById(options.containerId);

    // Get HTML elements
    this.$userImage = this.$heroWidget.querySelector("#user_avatar");
    this.$userName = this.$heroWidget.querySelector("#user_name");
    this.$userLogin = this.$heroWidget.querySelector("#user_login");
    this.$userBio = this.$heroWidget.querySelector("#user_bio");
    this.$userTwitter = this.$heroWidget.querySelector("#twitter_login");
    this.$userFollowers = this.$heroWidget.querySelector("#followers");
    this.$userFollowing = this.$heroWidget.querySelector("#following");
    this.$userRepositories = this.$heroWidget.querySelector("#repositories");
    this.$isHirable = this.$heroWidget.querySelector("#hirable");
    this.$userLocation = this.$heroWidget.querySelector("#location");
    this.$userGists = this.$heroWidget.querySelector("#gists");
    this.$userCompany = this.$heroWidget.querySelector("#company");
  }

  public async render(viewData: HeroViewData) {
    this.viewData = viewData;
    // Insert data
    this.$userImage.src = this.viewData.avatarUrl;
    this.$userName.textContent = this.viewData.name;
    this.$userLogin.textContent = "@" + this.viewData.login;
    this.$userBio.textContent = this.viewData.bio;
    this.$userTwitter.textContent = "@" + this.viewData.twitterUsername;
    this.$userFollowing.textContent = String(this.viewData.following);
    this.$userFollowers.textContent = String(this.viewData.followers);
    this.$userRepositories.textContent = String(this.viewData.publicRepos);
    this.$userLocation.textContent = this.viewData.location;
    this.$userGists.textContent = String(this.viewData.publicGists);
    this.$userCompany.textContent =
      this.viewData.company === null ? "Free" : this.viewData.company;
    this.$isHirable.textContent = this.viewData.hirable === null ? "Yes" : "No";
  }
}
