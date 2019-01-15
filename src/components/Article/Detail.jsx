import React, { Component } from 'react';
import View from './View';
import Edit from './Edit';
import styles from './Detail.less';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      status: props.status || 'edit'
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className={styles.container}>
        {status === 'edit' ? <Edit></Edit> : <View></View>}
      </div>
    );
  }
}

export default ArticleDetail;