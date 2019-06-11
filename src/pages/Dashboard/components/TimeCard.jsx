import React, { Component } from 'react'
import { Card } from "antd";
import Overtime from './Overtime';

export default class TimeCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card title="Invoices over time" style={{ textAlign: "center" }}>
          <Overtime />
        </Card>
      </React.Fragment>
    )
  }
}
