export default class HomePageModel {
  constructor(login, cacheService) {
    this.login = login;
    this.user = {};
    this.CACHE_KEY = "HOME_PAGE_MODEL_USER_DATA_CACHE";
    this.cache = cacheService;
  }

  async getUser() {
    const cache = await this.cache.getItem(this.CACHE_KEY);
    if (cache === null) {
      const res = await fetch(`https://api.github.com/users/${this.login}`);
      const data = await res.json();
      await this.cache.setItem(this.CACHE_KEY, JSON.stringify(data));
      return data;
    } else {
      return JSON.parse(cache);
    }
  }
}
