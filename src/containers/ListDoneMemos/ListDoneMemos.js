import { connect } from 'react-redux'
import React, { Component } from 'react'
import NewComponent from '../../components/wrapWithListMemos/wrapWithListMemos'

const mapStateToProps = (state) => ({todolist: state.todolist})

class ListTodoMemos extends Component {
  render () {
    let title = '新建事项'
    return <NewComponent title={title} doneFlag={3} todolist={this.props.todolist} />
  }
}

export default connect(mapStateToProps)(ListTodoMemos)
