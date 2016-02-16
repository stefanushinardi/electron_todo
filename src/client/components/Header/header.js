import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

class Header extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="header" className="row pad-3">
        <div className="col-sm-8 col-sm-offset-2 col-xs-12 text-center">The Header</div>
        <div id="headerLinks" className="col-sm-2 col-xs-12 text-center">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </div>
            <div className="col-sm-6 col-xs-12">
              <Link to="/projects" activeClassName="active">Projects</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
