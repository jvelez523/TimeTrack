import React, { Component } from "react";
import { Card } from "antd";
import BarBilled from "./ChartBilled";

export default class BilledChart extends Component {
  render() {
    return (
      <React.Fragment>
        <Card title="Hours Billed" style={{ textAlign: "center" }}>
          <BarBilled />
        </Card>
      </React.Fragment>
    );
  }
}
