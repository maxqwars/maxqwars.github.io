/*
 * Declare HeroModel init options
 */
type HeroModelOptions = {
  // Component configuration file URL
  configUrl: string;
};

/*
 * Declare HeroModel config keys
 */
type HeroModelConfig = {
  //? GitHub user login
  githubLogin: string;
};

/*
 * Declare GH user data keys
 */
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
    //?  Load configuration from static JSON file
    await this._loadConfig(this._configUrl);
  }

  private async _loadConfig(url: string) {
    const req = await fetch(url);
    if (req.ok) {
      const config: HeroModelConfig = await req.json();
      this._config = config;
      this._githubUser = this._config.githubLogin;
    } else {
      throw Error("Failed fetch Hero component config");
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
