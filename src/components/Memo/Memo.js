import React, { Component } from 'react'
import { Row, Col, Checkbox } from 'antd'
import PropTypes from 'prop-types'
import './Memo.css'

class Memo extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  }
  static defaultProps = {
    content: '妈妈喊我回家吃饭'
  }
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="memo">
        <Row>
          <Col span={1}>
            <Checkbox />
          </Col>
          <Col>{this.props.content}</Col>
          <Col></Col>  
        </Row>
      </div>
    )
  }

}

export default Memo
