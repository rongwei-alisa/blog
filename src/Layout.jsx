import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import App from './App';
import Header from 'components/Header';
import ContentWrapper from 'components/Content';
import Footer from 'components/Footer';
import styles from './Layout.less';

const Content = ContentWrapper(App);

const BlogLayout = () => (
  <Router>
    <Layout className={styles.layout}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Router>
);

export default BlogLayout;