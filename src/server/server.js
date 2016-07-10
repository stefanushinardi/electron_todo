import 'babel-polyfill';
import express, { Router } from 'express';
//import Promise from 'bluebird';

import config from './../../config/config.js';
import Middlewares from './middlewares';
import Store from './store';
import Api from './api';
import Broker from './broker';

try{
  const app = express();
  const router = Router();
  const store = new Store();
  const api = new Api(router,store);
  const middleware = new Middlewares(router);

  //setup broker 
  const broker = new Broker({host:'localhost',port:'1337'});
  if(broker.connect()){
    console.log('connected to broker at ' + "http://" + broker.host + ":" + broker.port);
  };
  broker.subscribe((data)=>{
    store.set('data',data);
  });

  //setup middlewares
  app.use(middleware.router);

  //setup api
  app.use(api.router);

  //host server
  const server = app.listen(process.env.PORT || config.port, config.host , () => {
    const port = server.address().port
    const host = server.address().address
    console.log('Application started at http://' + host + ':' + port)
  })
  module.exports = app;
  //export default app;
}
catch(err){
  console.log(err.stack);

}

