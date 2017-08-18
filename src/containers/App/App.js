import PropTyps from 'prop-types'
import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import './App.css'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  componentDidMount () {

  }
  render() {
    const { searchText, todolist, addTodos } = this.props
    return (
      <div>
        <Header
          onAdd={text => addTodos(text)}
          onSearch={text => searchText(text)} />
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

export default App
