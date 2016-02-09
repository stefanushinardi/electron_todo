import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './components/App/App';

//css
import './main.scss';


//render root
const root = document.createElement('div');
root.setAttribute("id","root");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

