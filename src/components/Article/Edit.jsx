import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        shajaskdasd
        <TextArea />
      </div>
    );
  }
}

export default Edit;