export default class PulseModel {

  constructor(ids) {
    this.ids = ids
    this.getRepositoryInfoEndpoint = 'https://api.github.com/repos/'
    this.repos = []
    console.log('Pulse model')
  }

  async _getRepository(repoId) {
    const response = await fetch(`${this.getRepositoryInfoEndpoint}${repoId}`)
    if (response.ok) {
      return await response.json()
    }
  }

  async load() {
    for (let i = 0; i < this.ids.length; i++) {
      const repo = await this._getRepository(this.ids[i])
      this.repos.push(repo)
    }
    return this.repos
  }

}
