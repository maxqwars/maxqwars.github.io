export default class PulseController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  async run() {
    const repos = await this.model.load();

    console.log(repos);

    const data = repos.map((repo) => ({
      id: repo["id"],
      description: repo["description"],
      fullName: repo["full_name"],
      name: repo["name"],
      license: repo["license"]["spdx_id"],
      fork: repo["fork"],
      forks: repo["forks"],
      htmlUrl: repo["html_url"],
      language: repo["language"],
      stargazersCount: repo["stargazers_count"],
    }));

    this.view.render(data);
  }
}
