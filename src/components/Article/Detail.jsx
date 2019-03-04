import React, { Component } from 'react';
import View from './View';
import Edit from './Edit';
import styles from './Detail.less';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log('detail')
    this.state = {
      status: props.status || 'edit'
    };
  }

  componentDidMount = () => {
    console.log('detail did mount')
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