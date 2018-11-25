import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.less';

const { Footer } = Layout;

function BlogFooter() {
  return (
    <Footer className={styles.footer}>
      Blog ©2018 Created by Alisa_Wei
    </Footer>
  );
}

export default BlogFooter;