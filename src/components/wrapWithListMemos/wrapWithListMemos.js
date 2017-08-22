/**
 * @file 高阶组件，用于封装ListMemos，形成不同的state
 * @author Seant
 * @date 17/8/18
 */
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ListMemos from '../ListMemos/ListMemos'

export default class NewComponent extends Component {
  render () {
    let { doneFlag, todolist, title, onDel, toDoing, toDone, toTodo } = this.props
    todolist = todolist || []
    let list = [], type
    // console.log(todolist)
    switch (doneFlag) { // 1:新建，2:正则进行，3：完成
      case 1:
        todolist.forEach((item) => {
          if (item.istodo) {
            list = [...list, item]
          }
        })
        type = 'todo-list'
        break;
      case 2:
        todolist.forEach((item) => {
          if (item.isdoing) {
            list = [...list, item]
          }
        })
        type = 'doing-list'
        break;
      case 3:
        todolist.forEach((item) => {
          if (item.isdone) {
            list = [...list, item]
          }
        })
        type = 'done-list'
        break;
      default:
        break;
    }
    return (
      <ListMemos title={title} list={list} memoNums={list.length} type={type} onDel={onDel} toDoing={toDoing} toDone={toDone} toTodo={toTodo}/>
    )
  }
}


