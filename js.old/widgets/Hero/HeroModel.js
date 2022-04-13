export class HeroModel {
  constructor() {
    this.githubUserLogin = "";
    this.config = {};
  }

  async init() {
    await this.loadConfig();
  }

  async loadConfig() {
    const request = await fetch("/config/hero.json");
    if (request.ok) {
      const config = await request.json();
      this.config = config;
      this.githubUserLogin = config.githubLogin;
    }
  }

  async getGithubUserInfo() {
    const request = await fetch(`https://api.github.com/users/${this.githubUserLogin}`)
    if (request.ok) {
      return await request.json()
    }
  }
}
