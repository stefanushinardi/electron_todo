import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [] 

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id,maxId), -1) +1,
          task: action.task,
          completed: false
        },
        ...state
      ];
      break;
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
      break;
    case EDIT_TODO:
      return state.map(todo => {
        if(todo.id === action.id){
          return Object.assign({},todo,{ task: action.task });
        }
        else{
          return todo;
        };
      })
      break;
    case COMPLETE_TODO:
      return state.map(todo => {
        if(todo.id === action.id){
          Object.assign({},todo,{ completed: !todo.completed });
        }
        else{
          return todo;
        }
      });
      break;
    case COMPLETE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, { completed: true });
      })
      break;
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
      break;
    default:
      return state
  }
}
