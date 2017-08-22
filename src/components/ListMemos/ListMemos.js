import React, { Component } from 'react'
import { Row, Col, Button, Collapse } from 'antd'
import PropTypes from 'prop-types'
import Memo from '../Memo/Memo'

class ListMemos extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // 展示名称
    list: PropTypes.arrayOf(PropTypes.shape({ // 列表具体信息
      isdoing:PropTypes.bool.isRequired,
      isdone:PropTypes.bool.isRequired,
      istodo:PropTypes.bool.isRequired,
      todo:PropTypes.string.isRequired
    })).isRequired,
    type: PropTypes.string, // 列表类型： doing-list/todo-list/done-list
    onDel: PropTypes.func.isRequired
  }
  static defaultProps = {
    title: '事项',
    list: []
  }
  render () {
    let { doneFlag, todolist, title, onDel, toDoing, toDone, toTodo, type } = this.props
    const Panel = Collapse.Panel
    let num = 0
    todolist.forEach((it) => {
      switch (doneFlag) {
        case 1:
          if (it.istodo) {
            num += 1
          }
          break
        case 2:
          if (it.isdoing) {
            num += 1
          }
          break
        case 3:
          if (it.isdone) {
            num += 1
          }
          break
        default:
          break
      }
    })
    const panelHeader = (
      <Row>
        <Col span={22}>
          <h3>{title}</h3>
        </Col>
        <Col span={2}>
          <Button size="small" shape="circle">{num}</Button>
        </Col>
      </Row>
    )
    return (
      <div>
        <main className={type || 'memo-list'}>
          <Collapse style={{width: '100%',
            maxWidth: '800px',
            margin: '0 auto'}}>
            <Panel header={panelHeader} key="1">
              {
                todolist.map((item, i) => {
                  switch (doneFlag) {
                    case 1:
                      if (item.istodo) {
                        return (<Memo content={item.todo} key={i} index={i} type={type} onDel={onDel} toDoing={toDoing} toDone={toDone} toTodo={toTodo}/>)
                      }
                    break
                    case 2:
                      type = 'doing-list'
                      if (item.isdoing) {
                        return (<Memo content={item.todo} key={i} index={i} type={type} onDel={onDel} toDoing={toDoing} toDone={toDone} toTodo={toTodo}/>)
                      }
                      break
                    case 3:
                      type = 'done-list'
                      if (item.isdone) {
                        return (<Memo content={item.todo} key={i} index={i} type={type} onDel={onDel} toDoing={toDoing} toDone={toDone} toTodo={toTodo}/>)
                      }
                      break
                    default:
                      break
                  }
                })
              }
            </Panel>
          </Collapse>
        </main>
      </div>
    )
  }
}

export default ListMemos
