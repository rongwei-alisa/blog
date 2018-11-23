import React from 'react';
import { Layout } from 'antd';
import AppRouter from './App';
import Header from './components/Header';
import ContentWrapper from './components/Content';
import Footer from './components/Footer';
import styles from './Layout.module.less';

const Content = ContentWrapper(AppRouter);

function BlogLayout() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default BlogLayout;