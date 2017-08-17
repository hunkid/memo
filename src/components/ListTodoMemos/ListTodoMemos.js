import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Collapse, Row, Col, Icon, Button } from 'antd'

class ListTodoMemos extends Component {
  static propTypes = {
    memoNums: PropTypes.number.isRequired
  }
  static defaultProps = {
    memoNums: 0
  }

  constructor () {
    super()
  }

  render () {
    return (
      <div>这里是Todo</div>
    )
  }
}

export default ListTodoMemos
