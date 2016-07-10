import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import path from 'path';

import { configureStore } from './store'
const store = configureStore();

//home route
import Index from "./view/index.js";

//scss
import "./assets/scss/main.scss";

render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Index}>
        </Route>
      </Router>
    </Provider>,
  ),document.getElementById('root')
)
