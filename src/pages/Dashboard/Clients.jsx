import React, { Component } from 'react'
import { Layout, Button, Typography, Row, Col } from "antd";
import CardComp from "./components/Card";
const { Title } = Typography
const { Content, Header } = Layout;

export default class Clients extends Component {
  render() {
    return (
      <React.Fragment>
        <Content style={{ margin: "50px" }}>
          <Header style={{ background: "#F0F2F5", justifyContent: "space-between", display: "flex", alignItems: "center", padding: "0px" }}>
            <Title>Clients</Title>
            <Button size="large">Add New</Button>
          </Header>
          <Content>
        <Row type='flex' >
          <CardComp />
        </Row>
        </Content>
        </Content>
      </React.Fragment>
    )
  }
}
