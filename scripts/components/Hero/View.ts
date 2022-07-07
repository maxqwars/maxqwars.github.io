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
    this.$heroWidget = document.getElementById(
      options.containerId
    ) as HTMLElement;

    this.init();
  }

  public init() {
    this.$userImage = this.$heroWidget.querySelector<HTMLImageElement>(
      "#user_avatar"
    ) as HTMLImageElement;

    this.$userName = this.$heroWidget.querySelector<HTMLElement>(
      "#user_name"
    ) as HTMLElement;

    this.$userLogin = this.$heroWidget.querySelector<HTMLElement>(
      "#user_login"
    ) as HTMLElement;

    this.$userBio = this.$heroWidget.querySelector<HTMLElement>(
      "#user_bio"
    ) as HTMLElement;

    this.$userTwitter = this.$heroWidget.querySelector<HTMLElement>(
      "#twitter_login"
    ) as HTMLElement;

    this.$userFollowers = this.$heroWidget.querySelector<HTMLElement>(
      "#followers"
    ) as HTMLElement;

    this.$userFollowing = this.$heroWidget.querySelector<HTMLElement>(
      "#following"
    ) as HTMLElement;

    this.$userRepositories = this.$heroWidget.querySelector<HTMLElement>(
      "#repositories"
    ) as HTMLElement;

    this.$isHirable = this.$heroWidget.querySelector<HTMLElement>(
      "#hirable"
    ) as HTMLElement;

    this.$userLocation = this.$heroWidget.querySelector<HTMLElement>(
      "#location"
    ) as HTMLElement;

    this.$userGists = this.$heroWidget.querySelector<HTMLElement>(
      "#gists"
    ) as HTMLElement;

    this.$userCompany = this.$heroWidget.querySelector<HTMLElement>(
      "#company"
    ) as HTMLElement;
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
