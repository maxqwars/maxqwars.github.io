type HeroModelOptions = {
  configUrl: string;
};

type HeroModelConfig = {
  githubLogin: string;
};

type GithubUserInfo = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string | null;
  followers: number;
  following: number;
  hirable: boolean | null;
  location: string;
  login: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string;
  url: string;
};

export default class HeroModel {
  private _githubUser: string | undefined;
  private _config: HeroModelConfig | undefined;
  private _configUrl: string;

  constructor(options: HeroModelOptions) {
    this._configUrl = options.configUrl;
  }

  public async init() {
    await this._loadConfig(this._configUrl);
  }

  private async _loadConfig(url: string) {
    const req = await fetch(url);
    if (req.ok) {
      const config: HeroModelConfig = await req.json();
      this._config = config;
      this._githubUser = this._config.githubLogin;
    }
  }

  public async getGithubUserInfo(): Promise<GithubUserInfo | null> {
    const req = await fetch(`https://api.github.com/users/${this._githubUser}`);
    if (req.ok) {
      const GH_USER_INFO: GithubUserInfo = await req.json();
      console.log(GH_USER_INFO);
      return GH_USER_INFO;
    }

    return null;
  }
}
