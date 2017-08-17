import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavLink from './NavLink'

class Navigation extends Component {
  render () {
    return (
      <div>
        <Row className="nav" type="flex" align="middle" justify="space-around">
          <Col span={6}>
            <NavLink to="/">
              全部
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/todo">
              新建事项
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/doing">
              正在进行
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/done">
              已完成
            </NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Navigation
