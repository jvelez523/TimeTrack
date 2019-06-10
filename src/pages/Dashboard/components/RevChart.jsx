import React, { Component } from "react";
import { Card } from "antd";
import Revcirclechart from "./Chaart";



export default class RevChart extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          title="Paid/Unpaid Invoices"
          style={{ textAlign: 'center' }}
        >
          <Revcirclechart />
        </Card>
      </React.Fragment>
    );
  }
}
