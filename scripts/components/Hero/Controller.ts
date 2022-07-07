import Model from "./Model";
import View from "./View";

export default class HeroController {
  private _view: View;
  private _model: Model;

  constructor(view: View, model: Model) {
    this._view = view; // HeroView instance
    this._model = model; // HeroModel instance
  }

  public async run() {
    await this._model.init(); // Prepare model
    const ghUserData = await this._model.getGithubUserInfo(); // Fetch GitHub user data

    if (ghUserData === null) {
      throw new Error("Failed fetch");
    }

    //? Remap
    const viewData = {
      name: ghUserData.name,
      login: ghUserData.login,
      bio: ghUserData.bio,
      following: ghUserData.following,
      followers: ghUserData.followers,
      location: ghUserData.location,
      company: ghUserData.company,
      hirable: ghUserData.hirable,
      avatarUrl: ghUserData.avatar_url,
      twitterUsername: ghUserData.twitter_username,
      publicRepos: ghUserData.public_repos,
      publicGists: ghUserData.public_gists,
    };

    //? Call view.render(viewData)
    this._view.render(viewData);
  }
}
