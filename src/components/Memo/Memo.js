import React, { Component } from 'react'
import { Row, Col, Checkbox, Icon, Button } from 'antd'
import PropTypes from 'prop-types'
import './Memo.css'

class Memo extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
  static defaultProps = {
    content: '妈妈喊我回家吃饭'
  }
  constructor (props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    this.props.onDel(this.props.index)
  }

  render () {
    return (
      <div className="memo">
        <Row>
          <Col span={1}>
            <Checkbox />
          </Col>
          <Col span={20}>{this.props.content}</Col>
          <Col span={1}>
            <Button icon="delete" type="primary" onClick={this.handleButtonClick}/>
          </Col>  
        </Row>
      </div>
    )
  }

}

export default Memo
