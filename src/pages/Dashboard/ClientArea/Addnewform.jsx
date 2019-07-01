import React, { Component } from 'react'
import { Modal} from 'antd'
import WrappedFormClient from './Form';

export default class Addnewform extends Component {

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
      <div>
        <Modal
          title="Title"
          visible={this.props.visible}
          onOk={this.props.handleOK}
          confirmLoading={this.props.loading}
          onCancel={this.props.cancel}
        >
          <p><WrappedFormClient /></p>
        </Modal>
      </div>
    )
  }
}
