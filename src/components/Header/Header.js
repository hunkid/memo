import React, { Component } from 'react'
import ReactDOM, { findDomNode } from 'react-dom'
import { Button, Input } from 'antd'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      inputValue: ''
    }
  }

  handleClick(e) {
    e.preventDefault()
    const text = this.state.inputValue.trim()
    if (text.length > 20) {
      alert('请输入20字以内')
    } else if (text === '') {
      alert('不许为空')
    } else {
      this.props.onAdd(text)
      this.setState({
        inputValue: ''
      })
    }
  }
  
  handleChange(e) {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return ( 
      <header>
        <section >
          <form>
            <label> 备忘录 </label>
            <Input type = "text" ref={(Input) => this.newInput = Input} value={this.state.inputValue}
              placeholder = "新建事项(20字以内)" defaultValue = {this.props.text} onChange={this.handleChange} onPressEnter={this.handleClick} autoComplete="off" 
              id = "new-todo" style = {{ width: '40%' }} />
            <div>
              <Button type="default" ghost onClick={e => this.handleClick(e)}>添加</Button>
              <Button type="default" ghost icon="search" onClick={e => this.handleSearch(e)}>搜索</Button>
            </div>
          </form>
        </section>
      </header>
    )
  }
}

export default Header