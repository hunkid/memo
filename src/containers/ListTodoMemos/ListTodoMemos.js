import { connect } from 'react-redux'
import React, { Component } from 'react'
import ListMemos from '../../components/ListMemos/ListMemos'
import { deleteTodo, changeTodoToDoing } from '../../actions'

const mapStateToProps = (state) => ({todolist: state.todolist})

const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (index) => dispatch(deleteTodo(index)),
    toDoing: (index) => dispatch(changeTodoToDoing(index))
  }
}

class ListTodoMemos extends Component {
  render () {
    let title = '新建事项'
    return <ListMemos title={title} doneFlag={1} {...this.props} type={'todo-list'} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodoMemos)
