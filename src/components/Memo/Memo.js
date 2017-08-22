import React, { Component } from 'react'
import { Row, Col, Checkbox, Button } from 'antd'
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
    this.handleCBChange = this.handleCBChange.bind(this)
    this.handleTextClick = this.handleTextClick.bind(this)
  }
  componentWillMount () {
    if (this.props.type) {

    }
  }
  handleButtonClick () {
    console.log('del')
    this.props.onDel(this.props.index)
  }
  handleCBChange (e) {
    if (e.target.checked) {
      this.props.toDoing && this.props.toDoing(this.props.index)
    } else {
      this.props.toTodo && this.props.toTodo(this.props.index)
    }
  }
  handleTextClick (e) {
    if (this.props.type === 'doing-list') {
      this.props.toDone && this.props.toDone(this.props.index)
    } else if (this.props.type === 'done-list') {
      this.props.toDoing && this.props.toDoing(this.props.index)
    }
  }
  render () {
    return (
      <div className="memo">
        <Row>
          <Col span={1}>
            <Checkbox onChange={this.handleCBChange} ref={(Checkbox) => this.Checkbox = Checkbox} defaultChecked={this.props.type === 'todo-list' ? false : true} disabled={this.props.type === 'done-list' ? true : false} />
          </Col>
          <Col span={20} onClick={this.handleTextClick} className="memo-content">{this.props.content}</Col>
          <Col span={1}>
            <Button icon="delete" type="primary" onClick={this.handleButtonClick}/>
          </Col>  
        </Row>
      </div>
    )
  }

}

export default Memo
