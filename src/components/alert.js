import { Modal } from 'antd';
import React from 'react';

class Alert extends React.Component {
  state = { visible: true };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div onLoad={this.showModal}>
        <Modal
          title="Alert"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          Don't reload more often because it may block your account due to limitation of requests 
        </Modal>
      </div>
    );
  }
}

export default Alert;