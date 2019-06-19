import React, { Component } from 'react'
import { Layout, Button, Typography } from 'antd';
import RevenueDisplay from './components/RevenueDisplay';
const { Title } = Typography
const { Content, Header } = Layout;


export default class Dashpage extends Component {
  render() {
    return (
      <React.Fragment>
      <Content style={{ margin: '50px' }}>
      <Header style={{ background: "#F0F2F5", justifyContent: "space-between", display: "flex", alignItems: "center", padding: "0px" }}>
            <Title>Dashboard</Title>
          </Header>
        <RevenueDisplay />
        </Content>
      </React.Fragment>
    )
  }
}
