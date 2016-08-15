import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as TodoActions from '../actions';

import { Button } from '../components';
import { Header,Footer,List } from './components/';

class Index extends Component{
  constructor(props){
    super(props);
    //binds
    this.markAllComplete = this.markAllComplete.bind(this);
    this.markAllIncomplete = this.markAllIncomplete.bind(this);
    this.clearAllComplete = this.clearAllComplete.bind(this);
  }
  markAllComplete(){
    this.props.actions.completeAll();
  }
  markAllIncomplete(){
    this.props.actions.incompleteAll();
  }
  clearAllComplete(){
    this.props.actions.clearCompleted();
  }
  render() {
    return (
      <div id="index">
        <Header></Header>
        <main id="main">
          <div id="main__buttons" className="row text-center">
            <div className="col-xs-4">
              <Button classes="Button--info" onClick={this.markAllIncomplete}>
                Mark All Incomplete
              </Button>
            </div>
            <div className="col-xs-4">
              <Button classes="Button--success" onClick={this.markAllComplete}>
                Mark All Complete
              </Button>
            </div>
            <div className="col-xs-4">
              <Button classes="Button--alert" onClick={this.clearAllComplete}>
                Clear all Completed
              </Button>
            </div>
          </div>
          <hr/>
          <div id="main__list">
            <div className="row">
              <div className="col-xs-12">
                <List data={this.props.todoData} actions={this.props.actions}></List>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

Index.propTypes = {
  todoData : PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    todoData : state.todos
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
