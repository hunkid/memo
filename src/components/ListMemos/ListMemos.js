import React, { Component } from 'react'
import { Row, Col, Button, Collapse } from 'antd'
import PropTypes from 'prop-types'
import Memo from '../Memo/Memo'

class ListMemos extends Component {
  static propTypes = {
    memoNums: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired
    })).isRequired,
  }
  static defaultProps = {
    memoNums: 2,
    title: '事项',
    list: [
      {
        content: '回家吃饭'
      }, 
      {
        content: '回家喝汤'
      }
    ]
  }

  constructor (props) {
    super(props)
  }

  render () {
    const Panel = Collapse.Panel
    const panelHeader = (
      <Row>
        <Col span={22}>
            <h3>{this.props.title}</h3>
        </Col>
        <Col span={2}>
            <Button size="small" shape="circle">{this.props.memoNums}
            </Button>
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
              {this.props.list.map((item, i)=> <Memo content={item.content} key={i}/>)}
            </Panel>
          </Collapse>
        </main>
    </div>
    )
  }
}

export default ListMemos
