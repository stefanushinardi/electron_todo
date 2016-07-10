import React, { Component, PropTypes } from 'react';
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
import classNames from 'classnames';
//import reactMixin from 'react-mixin';

class <%= name %>Component{
  constructor(props){
    super(props);
    this.state = {
      mounted : false,
    }
  }
  render(){
    return(
      <div id="<%= name %>Component" >
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

<%= name %>Component.propTypes = {
  //onComplete : React.PropTypes.func
}

<%= name %>Component.defaultProps = {
  //onComplete : ()=>{}
};

export default <%= name %>Component;


