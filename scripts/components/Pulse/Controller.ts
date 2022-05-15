import Model from "./Model";
import View from "./View";

class PulseController {
  private readonly _model: Model;
  private readonly _view: View;

  constructor(view: View, model: Model) {
    this._view = view;
    this._model = model;
  }

  async run() {
    const repos = await this._model.load();

    const data = repos.map((repo) => ({
      description: repo.description,
      fullName: repo.full_name,
      name: repo.name,
      license: repo.license.spdx_id,
      fork: repo.fork,
      forks: repo.forks,
      htmlUrl: repo.html_url,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
    }));

    this._view.render(data);
  }
}

export default PulseController;
