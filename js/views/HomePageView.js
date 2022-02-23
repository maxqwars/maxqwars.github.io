export default class HomePageView {
  constructor() {
    // Get container
    this.$widget = document.getElementById("github-widget");

    //
    if (this.$widget === null) {
      throw Error("Failed init github widget, markup not found!");
    }

    // Get element access
    this.$userName = this.$widget.querySelector("#user-name");
    this.$userBio = this.$widget.querySelector("#user-bio");
    this.$profileImage = this.$widget.querySelector("#user-image");
    this.$userLogin = this.$widget.querySelector("#user-login");
  }

  render(data) {
    this.$userName.innerHTML = data.name;
    this.$userBio.innerHTML = data.bio;
    this.$userLogin.innerHTML = `@${data.login}`;
    this.$profileImage.src = data.avatar_url;
  }
}
