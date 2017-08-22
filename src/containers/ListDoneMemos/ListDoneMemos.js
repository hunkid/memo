import { connect } from 'react-redux'
import React, { Component } from 'react'
import ListMemos from '../../components/ListMemos/ListMemos'
import { changeDoneToDoing, deleteTodo } from '../../actions'
const mapStateToProps = (state) => ({todolist: state.todolist})
const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (index) => dispatch(deleteTodo(index)),
    toDoing: (index) => dispatch(changeDoneToDoing(index))
  }
}

class ListDoneMemos extends Component {
  render () {
    let title = '已完成'
    return <ListMemos title={title} doneFlag={3} {...this.props} type={'done-list'} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDoneMemos)
