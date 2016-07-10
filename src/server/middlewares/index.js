import compression from 'compression';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import bodyParser from 'body-parser';

export default class Middlewares {
  constructor(app,router) {
  this.app = app;
    this.router = router;
    this._init();
  }
  _init(){
    this.router.use(compression({
      level: 6
    }));
  this.app.use(bodyParser.urlencoded({ extended: false}));
  this.app.use(bodyParser.json());

    this.router.use(cors());
    this.router.use(history());
  }
  router(){
    return this.router;
  }
}

