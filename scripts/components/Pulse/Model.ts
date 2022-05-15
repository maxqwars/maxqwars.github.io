type PulseModelOptions = {
  configUrl: string;
};

type RepoInfo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  fork: boolean;
  html_url: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
  };
  watchers: number;
  forks: number;
  default_branch: string;
  open_issues: number;
  topics: string[];
  is_template: boolean;
  subscribers_count: number;
  homepage: null | string;
};

type PulseModelConfig = {
  pinnedRepositories: string[];
};

export default class PulseModel {
  //? GET_REPOSITORY_INFO_ENDPOINT : https://api.github.com/repos/

  private _listOfPinned: string[];
  private _repos: RepoInfo[] = [];
  private _configUrl: string;
  private _config: PulseModelConfig | null;

  constructor(options: PulseModelOptions) {
    this._configUrl = options.configUrl;
    this._config = null;
  }

  private async _getRepositoryInfo(id: string): Promise<RepoInfo | null> {
    const req = await fetch(`https://api.github.com/repos/${id}`);
    if (req.ok) return await req.json();
    return null;
  }

  public async init() {
    const req = await fetch(this._configUrl);
    if (req.ok) this._config = await req.json();
  }

  public async load() {
    // Init Pulse model, fetch, parse and set config
    await this.init();

    this._listOfPinned = this._config.pinnedRepositories;

    /* Fetch repositories info */
    for (let i = 0; i < this._listOfPinned.length; i++) {
      const repo = await this._getRepositoryInfo(this._listOfPinned[i]);
      if (repo !== null) this._repos.push(repo);
    }

    console.log(this._repos);

    return this._repos;
  }
}
