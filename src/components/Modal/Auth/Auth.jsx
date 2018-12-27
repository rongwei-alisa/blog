import React, { Component } from 'react';
import { Modal } from 'antd';
import SigninForm from './SigninForm';

class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal visible={true} {...this.props}>
        <SigninForm />
      </Modal>
    );
  }
}

export default AuthModal;