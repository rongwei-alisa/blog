import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import styles from './Summary.less';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.toggleLiked = this.toggleLiked.bind(this);

    this.state = {
      liked: false
    };
  }

  toggleLiked(e) {
    e.stopPropagation();
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const { liked } = this.state;
    const likedIconTheme = liked ? 'twoTone' : '';
    const likedColor = '#eb2f96';
    const likedClass = classNames(styles.opt, { [styles.liked]: liked });
    return (
      <div className={styles.article}>
        <div className={styles.header}>
          <h3>我是一个标题</h3>
        </div>
        <div className={styles.content}>
          <p>我是文章内容啦啦啦啦，我是一个粉刷匠，粉刷本领强。我要把那新房子，刷的很漂亮。刷了房间又刷墙，刷子飞舞忙。</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.date}>2018-11-23</div>
          <div>
            <span className={styles.opt}>
              <Icon type="eye" />
              <span className={styles.number}>20</span>
            </span>
            <span className={likedClass} onClick={this.toggleLiked}>
              <Icon type="heart" theme={likedIconTheme} twoToneColor={likedColor} />
              <span className={styles.number}>10</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;