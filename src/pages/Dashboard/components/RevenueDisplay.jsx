import React, { Component } from "react";
import { Row, Col } from "antd";
import RevChart from "./RevChart";
import BilledChart from "./BilledChart";

export default class RevenueDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <Row type='flex'>
          <Col  md={12} xs={24}><RevChart /></Col>
          <Col md={12} xs={24}><BilledChart /></Col>
        </Row>
      </React.Fragment>
    );
  }
}
