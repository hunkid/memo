import { connect } from 'react-redux'
import React, { Component } from 'react'
import ListMemos from '../../components/ListMemos/ListMemos'
import { deleteTodo, changeDoingToDone, changeDoingToTodo } from '../../actions'

const mapStateToProps = (state) => ({todolist: state.todolist})

const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (index) => {
      dispatch(deleteTodo(index))
    },
    toDone: (index) => {
      dispatch(changeDoingToDone(index))
    },
    toTodo: (index) => {
      dispatch(changeDoingToTodo(index))
    }
  }
}

class ListDoingMemos extends Component {
  render () {
    let title = '正在进行中'
    return <ListMemos title={title} doneFlag={2} todolist={this.props.todolist} {...this.props} type={'doing-list'} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDoingMemos)
