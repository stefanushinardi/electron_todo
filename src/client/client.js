import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';

//home route
import Home from "./view/index.js";

//scss
import "./assets/scss/main.scss";

//render root
const root = document.createElement('div');
root.setAttribute("id","root");
document.body.appendChild(root);
ReactDOM.render(<Home />, root);

