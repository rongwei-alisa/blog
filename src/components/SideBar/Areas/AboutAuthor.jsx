import React from 'react';
import { Avatar } from 'antd';
import styles from './AboutAuthor.less';

function AboutAuthor() {
  return (
    <div className={styles.aboutAuthor}>
      <div className={styles.author}>
        <Avatar>Alisa</Avatar>
        <div className={styles.desc}>
          <div className={styles.name}>Alisa_Wei</div>
          <div className={styles.signature}>good good study, day day up!</div>
        </div>
      </div>
      <div className={styles.achievement}>
        <div className={styles.column}>
          <div className={styles.kind}>文章</div>
          <div className={styles.number}>10</div>
        </div>
        <div className={styles.column}>
          <div className={styles.kind}>赞</div>
          <div className={styles.number}>10</div>
        </div>
        <div className={styles.column}>
          <div className={styles.kind}>评论</div>
          <div className={styles.number}>10</div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;