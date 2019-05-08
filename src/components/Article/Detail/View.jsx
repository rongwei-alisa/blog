import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ReactMarkdown source={this.props.value}></ReactMarkdown>
    );
  }
}

export default View;