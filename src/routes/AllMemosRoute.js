import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListTodoMemos from '../components/ListTodoMemos/ListTodoMemos'
import ListDoingMemos from '../components/ListDoingMemos/ListDoingMemos'
// import ListDoneMemos from '../components/ListDoneMemos/ListDoneMemos'
class AllMemosRoute extends Component {
  render() {
    const { dispatch, todolist } = this.props;
    return (
      <div>
        <div>
          <ListTodoMemos />
          <ListDoingMemos />
        </div>
      </div>
    )
  }
}

export default AllMemosRoute
