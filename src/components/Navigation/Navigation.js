import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavLink from './NavLink'
import PropTypes from 'prop-types'

class Navigation extends Component {
  static propTypes = {
    allMemosNum: PropTypes.number,
    todoMemosNum: PropTypes.number,
    doingMemosNum: PropTypes.number,
    doneMemosNum: PropTypes.number
  }
  static defaultProps = {
    allMemosNum: 0,
    todoMemosNum: 0,
    doingMemosNum: 0,
    doneMemosNum: 0
  }
  render () {
    return (
      <div>
        <Row className="nav" type="flex" align="middle" justify="space-around">
          <Col span={6}>
            <NavLink to="/">
              全部&nbsp;{this.props.allMemosNum}
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/todo">
              新建事项&nbsp;{this.props.todoMemosNum}
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/doing">
              正在进行&nbsp;{this.props.doingMemosNum}
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/done">
              已完成&nbsp;{this.props.doneMemosNum}
            </NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Navigation
