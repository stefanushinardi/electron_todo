import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import akudaIcon from '../../assets/img/a.png';

class Header extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="header" className="row">
        <img className="akudaIcon col-xs-1 col-xs-offset-1 pad-1" src={akudaIcon}/>
        <div className="akudaIcon col-xs-6 col-xs-offset-1 text-center padt-3">The Header</div>
      </div>
    );
  }
}

export default Header;
