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
    this.router.post('/api/data', (req, res) => {
      let data = req.body;
      if(data)
        res.json(this.store.get('data').push(data));
    })
    this.router.put('/api/data/:id', (req, res) => {
      let data = req.body;
      let id = req.params.id;
      this.store.get('data')[id].completed = data.completed;
      res.json(this.store.get('data'));
    })
    this.router.delete('/api/data/:id', (req, res) => {
      let id = req.params.id;
      this.store.get('data').splice(id,1);
      res.json(this.store.get('data'));
    })
  }
}
