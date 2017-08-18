import * as types from '../constants/ActionTypes'

let todos // 定义最先的todos
(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos)
    } else {
        todos = []
    }
})()

const todolist = (state = todos, action) => {
  let newState
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state, {
          todo: action.text,
          istodo: true,
          isdoing: false,
          isdone: false
        }
      ]
    case types.CHANGE_TODO_TO_DOING:
      newState = [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          isdoing: true,
          isdone: false
        },
        ...state.slice(action.index + 1)
      ]
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    case types.CHANGE_DOING_TO_DONE:
      newState = [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          isdoing: false,
          isdone: true
        },
        ...state.slice(action.index + 1)
      ]
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    case types.CAHNGE_DONE_TO_DOING:
      newState = [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          isdoing: true,
          isdone: false
        },
        ...state.slice(action.index + 1)
      ]
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    case types.CHANGE_DOING_TO_TODO:
      newState = [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: true,
          isdoing: false,
          isdone: false
        },
        ...state.slice(action.index + 1)
      ]
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    case types.DELETE_TODO:
      newState = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
