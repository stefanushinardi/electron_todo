import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import LoremIpsum from '../LoremIpsum/loremipsum.js';

class Info extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="info" className="row">
        <br/>
        <br/>
        <div className="col-xs-offset-1 col-xs-10 text-center">
          <LoremIpsum />
        </div>
      </div>
    );
  }
}

export default Info;
