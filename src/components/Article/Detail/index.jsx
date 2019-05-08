import React, { Component } from 'react';
import { Button } from 'antd';
import View from './View';
import Edit from './Edit';
import styles from './index.less';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: props.isEdit
    };
  }

  toggleEditStatus = () => {
    this.setState(prevState => {
      return { isEdit: !prevState.isEdit };
    });
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { isEdit, value } = this.state;
    return (
      <div className={styles.container}>
        <Button onClick={this.toggleEditStatus}>预览</Button>
        <Button onClick={this.toggleEditStatus}>编辑</Button>
        {isEdit ?
          <Edit
            value={value}
            onChange={this.onChange}
          /> :
          <View value={value} />
        }
      </div>
    );
  }
}


ArticleDetail.defaultProps = {
  isEdit: true
};

export default ArticleDetail;