import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [] 

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [];
      break;
    case DELETE_TODO:
      return [];
      break;
    case EDIT_TODO:
      return [];
      break;
    case COMPLETE_TODO:
      return [];
      break;
    case COMPLETE_ALL:
      return [];
      break;
    case CLEAR_COMPLETED:
      return [];
      break;
    default:
      return state
  }
}
