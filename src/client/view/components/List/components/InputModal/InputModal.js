import React, { Component, PropTypes } from 'react';
import { Button } from '../../../../../components';
//import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router'
import classNames from 'classnames';
//import components from './components';
//import presentation from './presentation';
//import reactMixin from 'react-mixin';

class InputModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      mounted : false,
      value: ""
    }
    //binds
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onModalClick = this.onModalClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  componentDidMount(){
    //first time component has mounted
    this.setState({mounted:true});
  }
  componentWillUnmount(){
    //when component is unmounted 
    //console.log('unmounted:',this);
  }
  componentWillReceiveProps(nextProps){
    ////invoked when component is receiving new props
  }
  componentWillUpdate(nextProps, nextState){
    ////invoked immediately before rendering when new props or state are being received (not called on initial render)
    ////cannot use this.setState() in this method, use componentWillReceiveProps instead
  }
  componentDidUpdate(prevProps, prevState){
    //invoked immediately after component's updates are flushed to the DOM. this method is not called for initial render
    //this is an opportunity to operate on the DOM when the component has been updated.
  }
  onSubmit(){
    this.props.onSubmit(this.state.value);
    this.props.onHide();
  }
  handleInputChange(event){
    this.setState({value: event.target.value});
  }
  onClose(event){
    this.props.onHide();
  }
  onModalClick(event){
    this.props.onHide();
  }
  render(){
    return(
      <div id="InputModal" onClick={this.onModalClick}>
        <div className="container" onClick={(e)=>{e.stopPropagation()}}>
          <div className="close-icon" onClick={this.onClose} >X</div>
          <div className="row">
            <div className="columns col-xs-12 col-md-9">
              <input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
            </div>
            <div className="columns col-xs-12 col-md-3">
              <Button classes="Button--success" onClick={this.onSubmit}>
                <div style={{padding: '10px'}}>
                  ok
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//reactMixin.onClass(addItemModule,BaseMixin);

InputModal.propTypes = {
}

InputModal.defaultProps = {
};

export default InputModal;


