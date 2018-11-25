import React from 'react';
import { Avatar } from 'antd';
import styles from './AboutAuthor.less';

function AboutAuthor() {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <Avatar>Alisa</Avatar>
        <div className={styles.desc}>
          <div className={styles.name}>Alisa_Wei</div>
          <div>good good study, day day up!</div>
        </div>
        <div className={styles.achievement}>
          <div>
            <span>文章</span>
            <span>10</span>
          </div>
          <div>
            <span>赞</span>
            <span>10</span>
          </div>
          <div>
            <span>评论</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;