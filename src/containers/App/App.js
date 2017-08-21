import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import { addTodo } from '../../actions'
import './App.css'
class App extends Component {
  static propTypes = {
    todolist: PropTypes.arrayOf(
      PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        isdoing: PropTypes.bool.isRequired,
        isdone: PropTypes.bool.isRequired
      }).isRequired).isRequired,
  }
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
    let [todoNumber, doingNumber, doneNumber] = [0, 0, 0]
    todolist.forEach(item => {
      if (item.istodo) {
        todoNumber += 1
      }
      if (item.isdoing) {
        doingNumber += 1
      }
      if (item.isdone) {
        doneNumber += 1
      }
    })
    return (
      <div>
        <Header
          onAdd={text => addTodos(text)}
          onSearch={text => searchText(text)} />
        <Navigation allMemosNum={todolist.length} todoMemosNum={todoNumber} doingMemosNum={doingNumber} doneMemosNum={doneNumber} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({todolist: state.todolist})

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (text) => {
      dispatch(addTodo(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
