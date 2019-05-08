import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <TextArea
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Edit;