import React, { Component } from "react";
import { Row, Col } from "antd";
import RevChart from "./RevChart";
import BilledChart from "./BilledChart";
import TimeCard from "./TimeCard";

export default class RevenueDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <Row type='flex' gutter={16}>
          <Col  md={12} xs={24}><RevChart /></Col>
          <Col md={12} xs={24}><BilledChart /></Col>
        </Row>
        <Row type="flex" gutter={16} style={{paddingTop: '50px'}}>
        <Col  md={24} xs={24}><TimeCard /></Col>
        </Row>
      </React.Fragment>
    );
  }
}
