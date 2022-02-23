class CacheService {
  constructor(expires) {
    this._cacheExpires = expires;
    this._timestampPostfix = "_TIMESTAMP";
  }

  async getItem(key) {
    const item = localStorage.getItem(key);
    const timestamp = localStorage.getItem(key + this._timestampPostfix);

    if (Date.now() - timestamp > this._cacheExpires) {
      return null;
    }

    return item;
  }

  async setItem(key, data) {
    localStorage.setItem(key, data);
    localStorage.setItem(key + this._timestampPostfix, Date.now());
  }
}

export default new CacheService(43200);
