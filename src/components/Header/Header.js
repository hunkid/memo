import React, {
  Component
} from 'react'
import {
  findDomNode
} from 'react-dom'
import {
  Button,
  Input
} from 'antd'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    if (e.keyCode !== '13') {

    }
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return ( 
      <header>
        <section >
          <form>
            <label> 备忘录 </label>
            <Input onKeyUp = {
              this.handleKeyUp}
              ref = "inputnew"
              type = "text"
              placeholder = "新建事项(20字以内)"
              defaultValue = {
                this.props.text
              }
              id = "new-todo"
              style = {
                {
                  width: '40%',
                }
              }
            />
            <div>
              <Button
                type="default"
                ghost
                onClick={e => this.handleClick(e)}>添加
              </Button>
              <Button
                type="default"
                ghost
                icon="search"
                onClick={e => this.handleSearch(e)}>搜索
              </Button>
            </div>
          </form>
        </section>
      </header>
    )
  }
}

export default Header