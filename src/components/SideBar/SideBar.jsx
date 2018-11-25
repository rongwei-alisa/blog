import React from 'react';
import * as Areas from './Areas';
import styles from './SideBar.less';

const areas = [{
  code: 'aboutAuthor',
  title: '关于博主',
  content: <Areas.AboutAuthor />
}, {
  code: 'newestArticle',
  title: '最新文章',
  content: <Areas.NewestArticle />
}, {
  code: 'classify',
  title: '分类',
  content: <Areas.Classify />
}, {
  code: 'archive',
  title: '归档',
  content: <Areas.Archive />
}, {
  code: 'hotArticle',
  title: '热门文章',
  content: <Areas.HotArticle />
}, {
  code: 'comments',
  title: '最新评论',
  content: <Areas.Comments />
}];

function SideBar() {
  return (
    <div className={styles.container}>
      {areas.map((data) => {
        return (
          <div className={styles[data.code]} key={data.code}>
            <h5 className={styles.title}>{data.title}</h5>
            <div className={styles.content}>{data.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;