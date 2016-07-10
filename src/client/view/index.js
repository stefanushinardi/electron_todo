import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as TodoActions from '../actions';

class Index extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const { todos, actions } = this.props;
    console.log(todos,actions);
    return (
      <div id="index" className="row">
        <div className="col-xs-12">
          Hello World
          </div>
      </div>
    );
  }
}

Index.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
