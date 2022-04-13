export class HeroView {
  constructor() {
    this.$heroWidget = document.getElementById("hero_widget");
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
    this.viewData = {};
  }

  async render(viewData) {
    this.viewData = viewData;
    // Insert data
    this.$userImage.src = this.viewData["avatar_url"];
    this.$userName.textContent = this.viewData["name"];
    this.$userLogin.textContent = "@" + this.viewData["login"];
    this.$userBio.textContent = this.viewData["bio"];
    this.$userTwitter.textContent = "@" + this.viewData["twitter_username"];
    this.$userFollowing.textContent = this.viewData["following"];
    this.$userFollowers.textContent = this.viewData["followers"];
    this.$userRepositories.textContent = this.viewData["public_repos"];
    this.$userLocation.textContent = this.viewData["location"];
    this.$userGists.textContent = this.viewData["public_gists"];
    this.$userCompany =
      this.viewData["company"] === null ? "n/d" : this.viewData["company"];
    this.$isHirable =
      this.viewData["hirable"] === null ? false : this.viewData["hirable"];
  }
}
