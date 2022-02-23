export default class HomePageController {
  constructor(HomePageView, HomePageModel) {
    this.view = HomePageView;
    this.model = HomePageModel;
  }

  async run() {
    const data = await this.model.getUser();
    this.view.render(data);
  }
}
