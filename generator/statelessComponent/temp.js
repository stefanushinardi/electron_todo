import React, { Component, PropTypes } from 'react';
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
import classNames from 'classnames';
//import reactMixin from 'react-mixin';

class <%= name %>{
  constructor(props){
    super(props);
    this.state = {
      mounted : false,
    }
  }
  render(){
    return(
      <div id="<%= name %>" >
        <%= name %>
        {
          for(prop in this.props){
            <div>{prop}</div>
          }
        }
      </div>
    )
  }
}

//reactMixin.onClass(<%= name %>,BaseMixin);

<%= name %>.propTypes = {
  //onComplete : React.PropTypes.func
}

<%= name %>.defaultProps = {
  //onComplete : ()=>{}
};

export default <%= name %>;


