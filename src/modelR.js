import { Modal, Button } from 'antd';
import React from 'react';
import WrappedRegistrationForm from './register';

class ModelsR extends React.Component {
  state = { visible: false,
  login:false,
  register :false,
  clicked :false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
         Signup 
        </Button>
        <Modal
          title="Signup"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <WrappedRegistrationForm />
        </Modal>
      </div>
    );
  }
}
export default ModelsR;