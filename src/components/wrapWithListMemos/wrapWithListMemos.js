/**
 * @file 高阶组件，用于封装ListMemos，形成不同的state
 * @author Seant
 * @date 17/8/18
 */
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ListMemos from '../ListMemos/ListMemos'
/**
 * @param {Number} doneFlag 1:新建，2:正则进行，3：完成
 */
const wrapWithListMemos = (doneFlag) => {
  var title = '';
  switch (doneFlag) {
    case 1: 
      title = '新建事项'
      break;
    case 2:
      title = '正在进行中'
      break;
    case 3:
      title = '已完成事项'
      break;
    default:
      break;
  }
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = {
        doneFlag 
      }
    }
    render () { // TODO:
      return (
        <ListMemos title={title}/>
      )
    }
  }
  return NewComponent
}

export default wrapWithListMemos
