import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Collapse, Row, Col, Icon, Button } from 'antd'
import Memo from '../Memo/Memo'

class ListDoingMemos extends Component {
  static propTypes = {
    memoNums: PropTypes.number.isRequired
  }
  static defaultProps = {
    memoNums: 0
  }

  constructor () {
    super()
  }

  render () {
    const Panel = Collapse.Panel
    return (
      <div>
        <Collapse>
          <Panel header="This is panel header 1" key="1">
            <Memo />
          </Panel>
        </Collapse>
      </div>
    )
  }
}

export default ListDoingMemos
