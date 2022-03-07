export class HeroController {
  constructor(view, model) {
    this.view = view
    this.model = model
  }

  async run() {
    await this.model.init()
    const viewData = await this.model.getGithubUserInfo()
    this.view.render(viewData)
  } 
}