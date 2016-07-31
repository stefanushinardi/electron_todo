import * as types from '../constants/ActionTypes'

export function addTodo(task) {
  return { type: types.ADD_TODO, task}
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, task) {
  return { type: types.EDIT_TODO, id, task}
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
