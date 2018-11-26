import React from 'react';
import styles from './Archive.less';

const data = [{
  name: 'React',
  number: 5
}, {
  name: 'Git',
  number: 2
}, {
  name: 'Webpack',
  number: 7
}, {
  name: 'JavaScript',
  number: 10
}, {
  name: 'CSS',
  number: 4
}];

function Archive() {
  return (
    <div>
      {data.map((d, index) => {
        return (
          // <div key={index} className={styles.item}>
            <a href={d.href} key={index} className={styles.item}>
              <span className={styles.name}>{d.name}</span>
              <span className={styles.number}>{d.number}篇</span>
            </a>
          // </div>
        )
      })}
    </div>
  )
}

export default Archive;