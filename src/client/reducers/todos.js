import * as types from '../constants/ActionTypes'

const initialState = [] 

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id,maxId), -1) +1,
          task: action.task,
          completed: false
        },
        ...state
      ];
      break;
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
      break;
    case types.EDIT_TODO:
      return state.map(todo => {
        if(todo.id === action.id){
          return Object.assign({},todo,{ task: action.task });
        }
        else{
          return todo;
        };
      })
      break;
    case types.COMPLETE_TODO:
      return state.map(todo => {
        if(todo.id === action.id){
          return Object.assign({},todo,{ completed: !todo.completed });
        }
        else{
          return todo;
        }
      });
      break;
    case types.COMPLETE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, { completed: true });
      })
      break;
    case types.INCOMPLETE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, { completed: false });
      })
      break;
    case types.CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
      break;
    default:
      return state
  }
}
