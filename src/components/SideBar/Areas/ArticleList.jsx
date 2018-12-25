import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleList.less';

const data = [{
  name: 'Javacript 遍历、枚举与迭代的骚操作'
}, {
  name: '精读《使用 CSS 属性选择器》'
}, {
  name: 'webpack4 升级篇'
}, {
  name: 'ES6 迭代器和生成器'
}, {
  name: '箭头函数'
}];

function ArticleList() {
  return (
    <div className={styles.articleList}>
      {data.map((d, index) => {
        return (
        <div key={index} className={styles.item}>
          <Link title={d.name} to={'/article/1'}>{d.name}</Link>
        </div>
        )
      })}
    </div>
  );
}

export default ArticleList;