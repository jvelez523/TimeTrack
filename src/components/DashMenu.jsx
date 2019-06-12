import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Dashpage from '../pages/Dashboard/Dashpage';
import Invoices from '../pages/Dashboard/Invoices';
import Clients from '../pages/Dashboard/Clients';

const { Header, Content, Footer, Sider } = Layout;

class Dash extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="dashmenu">
          <div className="logo">
          <Icon type="clock-circle" theme="twoTone" twoToneColor="#F2545B" style={{ fontSize: '32px' }}/>
          {this.state.collapsed ? <span style={{ fontSize: '24px' , color: 'white', marginLeft: '10px', display: 'none' }}>TimeTrack</span> : <span style={{ fontSize: '24px' , color: 'white', marginLeft: '10px' }}>TimeTrack</span>}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className="dashitems">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="container" />
              <span>Invoices</span>
              <Link to="/dashboard/invoices" />
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type="team" />
              <span>Clients</span>
              <Link to="/dashboard/clients" />
            </Menu.Item>
            <Menu.Item key="4">
            <Icon type="logout" />
              <span>Log Out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
        <Layout>
        <Route exact path="/dashboard" component={Dashpage} />
        <Route exact path="/dashboard/invoices" component={Invoices} />
        <Route exact path="/dashboard/clients" component={Clients} />
        </Layout>
      </Layout>
    );
  }
}

export default Dash