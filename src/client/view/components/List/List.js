import React, { Component, PropTypes } from 'react';
import { Button } from '../../../components';
import { CheckBox } from './presentation';
import { InputModal } from './components';

class List extends Component{
  constructor(args){
    super(args)
    this.state = {
      mounted : false,
      showAddInputModal: false,
      showEditInputModal: false,
      lastItemClicked: null
    }
    //binds
    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onHideInputModal = this.onHideInputModal.bind(this);
  }
  componentDidMount(){
  }
  componentWillUnmont(){
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  onCheckBoxClick(item){
    console.log('state changed',item);
  }
  onAddItem(){
    this.setState({showAddInputModal: true });
  }
  onEditItem(item){
    this.setState({lastItemClicked: item});
    this.setState({showEditInputModal: true});
  }
  onDeleteItem(event,item){
    this.props.actions.deleteTodo(item.id);
  }
  onHideInputModal(){
    this.setState({showAddInputModal: false ,showEditInputModal: false});
  }
  render(){
    return (
      <div id="List">
        <table>
          <thead>
            <tr>
              <th className="completed-header">
                Completed
              </th>
              <th className="task-header">
                Task
              </th>
              <th className="edit-header">
                Edit
              </th>
              <th className="delete-header">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.data.map((item,i)=>{
            return (
            <tr key={item.id}>
              <td>
                <CheckBox checked={item.completed} onClick={this.onCheckBoxClick} key={item.id} data={item}></CheckBox>
              </td>
              <td>
                <div className="List__TaskName text-center">
                  {item.task}
                </div>
              </td>
              <td>
                <Button classes="Button--warning" onClick={()=>{this.onEditItem(item)}} key={item.id} data={item}>
                  Edit Task
                </Button>
              </td>
              <td>
                <Button classes="Button--alert" onClick={(e)=>{this.onDeleteItem(e,item)}} key={item.id} data={item}>
                  Delete Task
                </Button>
              </td>
            </tr>
            )
            }) 
            }
            <tr className="List__addItem">
              <td colSpan="4">
                <Button classes="Button--success" onClick={this.onAddItem}>
                  <div style={{padding: '10px'}}>
                    Add Task +
                  </div>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.showAddInputModal ? <InputModal onSubmit={this.props.actions.addTodo} onHide={this.onHideInputModal}/>  : false }
        {this.state.showEditInputModal ? <InputModal onSubmit={task=>{this.props.actions.editTodo(this.state.lastItemClicked.id,task)}} onHide={this.onHideInputModal}/>  : false }
      </div>
    )
}
}
List.propTypes = {
  data: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
}
List.defaultProps ={
  data: [],
  actions: {}
}
export default List;
