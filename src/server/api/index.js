import path from 'path';
import express from 'express';

export default class Api {
  constructor(router,store) {
    // init
    this.router = router;
    this.store = store;

    this._static();
    this._api();
  }
  _static(){
    this.router.use('/', express.static(path.join(__dirname, 'static')))
  }
  _api(){
    this.router.get('/api/data', (req, res) => {
      res.json(this.store.get('data'));
    })
  }
}
