import React from 'react';
import styles from './Classify.less';

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

function Classify() {
  return (
    <div className={styles.classify}>
      {data.map((d, index) => {
        return (
          <a href={d.href} key={index} className={styles.item}>
            <span className={styles.name}>{d.name}</span>
            <span className={styles.number}>{d.number}篇</span>
          </a>
        )
      })}
    </div>
  );
}

export default Classify;