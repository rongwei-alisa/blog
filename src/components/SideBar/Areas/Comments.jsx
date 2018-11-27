import React from 'react';
import styles from './Comments.less';

const comments = [{
  comment: '没有看懂啊，这篇博文说的是什么啊啊啊啊',
  commentator: 'lulua'
}, {
  comment: '没有看懂啊，这篇博文说的是什么啊啊啊啊',
  commentator: 'lulua'
}, {
  comment: '没有看懂啊，这篇博文说的是什么啊啊啊啊',
  commentator: 'lulua'
}, {
  comment: '没有看懂啊，这篇博文说的是什么啊啊啊啊',
  commentator: 'lulua'
}, {
  comment: '没有看懂啊，这篇博文说的是什么啊啊啊啊',
  commentator: 'lulua'
}];

function Comments() {
  return (
    <div className={styles.comments}>
      {comments.map((data, index) => {
        return (
          <div key={index} className={styles.comment}>
            <div className={styles.commentator}>{data.commentator} 的评论：</div>
            <div className={styles.commentContent}>“{data.comment}”</div>
          </div>
        );
      })}
    </div>
  )
}

export default Comments;