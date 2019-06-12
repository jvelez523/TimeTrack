import React, { Component } from 'react'
import { Layout } from 'antd';
import RevenueDisplay from './components/RevenueDisplay';
const { Content } = Layout;


export default class Dashpage extends Component {
  render() {
    return (
      <React.Fragment>
      <Content style={{ margin: '50px' }}>
        <RevenueDisplay />
        </Content>
      </React.Fragment>
    )
  }
}
