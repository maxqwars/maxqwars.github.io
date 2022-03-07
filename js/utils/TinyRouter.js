export default class TinyRouter {
  /**
   * Creates an instance of TinyRouter.
   * @param {*} currentPath
   * @memberof TinyRouter
   */
  constructor(currentPath) {
    this.currentPath = currentPath;
    this.routes = [];
  }

  /**
   * Register new route
   *
   * @param {*} path
   * @param {*} callback
   * @return {*} 
   * @memberof TinyRouter
   */
  register(path, callback) {
    this.routes.push({
      path,
      callback,
    });
    return this;
  }

  /**
   * Run TinyRouter
   *
   * @memberof TinyRouter
   */
  run() {
    this.routes.map(({ path, callback }) => {
      if (path === this.currentPath || path === `${this.currentPath}.html`) {
        callback();
      }
    });
  }
}
