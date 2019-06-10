import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
import RevenueDisplay from './components/RevenueDisplay';

const { Header, Content, Footer, Sider } = Layout;
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
