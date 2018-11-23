import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.module.less';

const { Footer } = Layout;

function BlogFooter() {
  return (
    <Footer className={styles.footer}>
      Blog ©2018 Created by Alisa@Wei
    </Footer>
  );
}

export default BlogFooter;