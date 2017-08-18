import React, {Component} from 'react'
import ListDoingMemos from '../ListDoingMemos/ListDoingMemos'
import ListTodoMemos from '../ListTodoMemos/ListTodoMemos'
import ListDoneMemos from '../ListDoneMemos/ListDoneMemos'

class ListAllMemos extends Component {
  render () {
    return (
      <div>
        <ListTodoMemos />
        <ListDoingMemos />
        <ListDoneMemos />
      </div>
    )
  }
}

export default ListAllMemos
