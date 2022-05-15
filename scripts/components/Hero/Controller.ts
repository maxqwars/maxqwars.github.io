import Model from "./Model";
import View from "./View";

export default class HeroController {
  private _view: View;
  private _model: Model;

  constructor(view: View, model: Model) {
    this._view = view;
    this._model = model;
  }

  public async run() {
    await this._model.init();
    const VD = await this._model.getGithubUserInfo();

    if (VD === null) {
      throw new Error("Failed fetch");
    }

    this._view.render({
      avatarUrl: VD.avatar_url,
      name: VD.name,
      login: VD.login,
      bio: VD.bio,
      twitterUsername: VD.twitter_username,
      following: VD.following,
      followers: VD.followers,
      publicRepos: VD.public_repos,
      location: VD.location,
      publicGists: VD.public_gists,
      company: VD.company,
      hirable: VD.hirable,
    });
  }
}
