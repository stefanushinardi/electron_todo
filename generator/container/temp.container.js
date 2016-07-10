import React, { Component, PropTypes } from 'react';
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
import classNames from 'classnames';
//import reactMixin from 'react-mixin';

class <%= name %>Container{
  constructor(props){
    super(props);
    this.state = {
      mounted : false,
    }
  }
  componentDidMount(){
    //first time component has mounted
    this.setState({mounted:true});
  },
  componentWillUnmount(){
    //when component is unmounted 
    //console.log('unmounted:',this);
  },
  componentWillReceiveProps(nextProps){
    ////invoked when component is receiving new props
  },
  componentWillUpdate(nextProps, nextState){
    ////invoked immediately before rendering when new props or state are being received (not called on initial render)
    ////cannot use this.setState() in this method, use componentWillReceiveProps instead
  },
  componentDidUpdate(prevProps, prevState){
    //invoked immediately after component's updates are flushed to the DOM. this method is not called for initial render
    //this is an opportunity to operate on the DOM when the component has been updated.
  }
  render(){
    return(
      <div id="<%= name %>Container" >
        <%= name %>Container
      </div>
    )
  }
}

//reactMixin.onClass(<%= name %>,BaseMixin);

<%= name %>Container.propTypes = {
  //onComplete : React.PropTypes.func
}

<%= name %>Container.defaultProps = {
  //onComplete : ()=>{}
};

export default <%= name %>Container;



