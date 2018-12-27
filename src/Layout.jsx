import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider, Layout } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import Header from 'components/Header';
import ContentWrapper from 'components/Content';
import Footer from 'components/Footer';
import styles from './Layout.less';

const Content = ContentWrapper(App);

const BlogLayout = () => (
  <LocaleProvider locale={zh_CN}>
    <Router>
      <Layout className={styles.layout}>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Router>
  </LocaleProvider>
);

export default BlogLayout;