import React, { Component } from 'react'
import { Row, Col, Button, Collapse } from 'antd'
import PropTypes from 'prop-types'
import Memo from '../Memo/Memo'

class ListMemos extends Component {
  static propTypes = {
    memoNums: PropTypes.number.isRequired, // 列表数量
    title: PropTypes.string.isRequired, // 展示名称
    list: PropTypes.arrayOf(PropTypes.shape({ // 列表具体信息
      isdoing:PropTypes.bool.isRequired,
      isdone:PropTypes.bool.isRequired,
      istodo:PropTypes.bool.isRequired,
      todo:PropTypes.string.isRequired
    })).isRequired,
    onDel: PropTypes.func.isRequired
  }
  static defaultProps = {
    memoNums: 0,
    title: '事项',
    list: []
  }

  render () {
    const Panel = Collapse.Panel
    const panelHeader = (
      <Row>
        <Col span={22}>
          <h3>{this.props.title}</h3>
        </Col>
        <Col span={2}>
          <Button size="small" shape="circle">{this.props.memoNums}</Button>
        </Col>
      </Row>
    )
    return (
      <div>
        <main>
          <Collapse style={{width: '100%',
            maxWidth: '800px',
            margin: '0 auto'}}>
            <Panel header={panelHeader} key="1">
              {this.props.list.map((item, i) => <Memo content={item.todo} key={i} onDel={this.props.onDel} index={i} />)}
            </Panel>
          </Collapse>
        </main>
    </div>
    )
  }
}

export default ListMemos
