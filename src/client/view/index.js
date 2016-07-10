import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Index extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="index" className="row">
        <div className="col-xs-12">
          Hello World
          </div>
      </div>
    );
  }
}

export default Index;
