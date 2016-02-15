import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Header extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="header" className="row">
        <img className="col-xs-1 col-xs-offset-1 pad-1" />
        <div className="col-xs-6 col-xs-offset-1 text-center padt-3">The Header</div>
      </div>
    );
  }
}

export default Header;
