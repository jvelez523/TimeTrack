import React, { Component } from 'react'
import { Layout, Button, Typography, Row, Col } from "antd";
import CardComp from "./components/Card";
import Addnewform from './ClientArea/Addnewform';
const { Title } = Typography
const { Content, Header } = Layout;

export default class Clients extends Component {

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <React.Fragment>
        <Content style={{ margin: "50px" }}>
          <Header style={{ background: "#F0F2F5", justifyContent: "space-between", display: "flex", alignItems: "center", padding: "0px" }}>
            <Title>Clients</Title>
            <Button size="large" onClick={this.showModal}>Add New</Button>
          </Header>
          <Content>
        <Row type='flex' >
          <CardComp />
        </Row>
        </Content>
        <Addnewform visible={this.state.visible} cancel={this.handleCancel} handleOK={this.handleOk} loading={this.state.confirmLoading}/>
        </Content>
      </React.Fragment>
    )
  }
}
