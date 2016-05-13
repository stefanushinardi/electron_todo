import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import path from 'path';

//home route
import Index from "./view/index.js";
import Projects from './view/projects/projects.js';
import Home from './view/_Home/Home.js';

//scss
import "./assets/scss/main.scss";

render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="/projects" component={Projects}/>
      </Route>
    </Router>
  ),document.getElementById('root')
)

