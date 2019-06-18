import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

export default class CardComp extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          style={{ width: 300, boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </React.Fragment>
    );
  }
}
