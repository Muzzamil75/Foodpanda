import { Modal, Button } from 'antd';
import React from 'react';
import WrappedNormalLoginForm from './login';

class ModelsL extends React.Component {
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

  handleSignup =() => {
    console.log('Handlreeee')
    return (
    <div>asdasd</div>//  <AvatarC />
    )
  }

  render() {
    return (
      <div >
        <Button type="primary" onClick={this.showModal}>
         Login 
        </Button>
        <Modal
          title="Login"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer = {null}
        >
        <WrappedNormalLoginForm />
        </Modal>
      </div>
    );
  }
}
export default ModelsL;