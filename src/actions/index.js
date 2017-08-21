/**
 * @file Action 测试异步action，以及在action中放入localstorage
 */

import * as types from '../constants/ActionTypes'

export const addTodo = (text) => {
  return (dispatch, getState) => {
    const state = getState()
    localStorage.setItem('todos', 
      JSON.stringify([
        ...state.todolist, {
          todo: text,
          istodo: true,
          isdoing: false,
          isdone: false
        }
      ])
    )
    setTimeout(() => {
      dispatch({
        type: types.ADD_TODO,
        text
      })
    })
  }
}

export function changeTodoToDoing(index) {
  return {
    type: types.CHANGE_TODO_TO_DOING,
    index
  }
}

export function changeDoneToDoing(index) {
  return {
    type: types.CHANGE_DONE_TO_DOING,
    index
  }
}

export function changeDoingToTodo(index) {
  return {
    type: types.CHANGE_DOING_TO_TODO,
    index
  }
}

export function changeDoingToDone(index) {
  return {
    type: types.CHANGE_DOING_TO_DONE,
    index
  }
}

export function deleteTodo(index) {
  return {
    type: types.DELETE_TODO,
    index
  }
}
