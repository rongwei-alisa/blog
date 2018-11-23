import React from 'react';
import styles from './SideBar.module.less';

function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutAuthor}>
        <h5 className={styles.title}>关于博主</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
      <div className={styles.newestArticle}>
        <h5 className={styles.title}>最新文章</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
      <div className={styles.classify}>
        <h5 className={styles.title}>分类</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
      <div className={styles.archive}>
        <h5 className={styles.title}>归档</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
      <div className={styles.hotArticle}>
        <h5 className={styles.title}>热门文章</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
      <div className={styles.comments}>
        <h5 className={styles.title}>最新评论</h5>
        <div className={styles.content}>哈哈哈</div>
      </div>
    </div>
  );
}

export default SideBar;