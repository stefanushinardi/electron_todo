import compression from 'compression';
import cors from 'cors';
import history from 'connect-history-api-fallback';

export default class Middlewares {
  constructor(router) {
    this.router = router;
    this._init();
  }
  _init(){
    this.router.use(compression({
      level: 6
    }));

    this.router.use(cors());
    this.router.use(history());
  }
  router(){
    return this.router;
  }
}

