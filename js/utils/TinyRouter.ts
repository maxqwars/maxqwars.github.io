type RouterRoute = {
  path: string;
  cb: Function;
};

class TinyRouter {
  private _routes: RouterRoute[] = [];
  private _currentPath = "";

  constructor(location) {
    this._currentPath = location;
  }

  add(path: string, cb: Function): TinyRouter {
    this._routes.push({
      path,
      cb,
    });
    return this;
  }

  run() {
    this._routes.map(({ path, cb }) => {
      if (path === this._currentPath || path === `${this._currentPath}.html`) {
        cb();
      }
    });
  }
}

export default TinyRouter;
