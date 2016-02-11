import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import path from 'path';

//home route
import Index from "./view/index.js";

//scss
import "./assets/scss/main.scss";

ReactDOM.render(<Index />, document.getElementById('index'));

