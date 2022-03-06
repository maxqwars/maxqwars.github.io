export default class PulseModel {
  constructor(ids) {
    this.ids = [];
    this.getRepositoryInfoEndpoint = "https://api.github.com/repos/";
    this.repos = [];
  }

  async _getRepository(repoId) {
    const response = await fetch(`${this.getRepositoryInfoEndpoint}${repoId}`);
    if (response.ok) {
      return await response.json();
    }
  }

  async init() {
    const request = await fetch(`/config/pulse.json`);
    if (request.ok) {
      const config = await request.json();
      this.ids = config["pinnedRepositories"];
    } else {
      console.warn(
        "Failed get Pulse config, please create `<root>/config/pulse.json`"
      );
      this.ids = ["maxqwars/maxqwars.github.io"];
    }
  }

  async load() {
    await this.init();
    for (let i = 0; i < this.ids.length; i++) {
      const repo = await this._getRepository(this.ids[i]);
      this.repos.push(repo);
    }
    return this.repos;
  }
}
