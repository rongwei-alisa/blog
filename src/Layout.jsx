import React from 'react';
import { Layout } from 'antd';
import AppRouter from './App';
import Header from './components/Header';
import ContentWrapper from './components/Content';
import Footer from './components/Footer';
import './Layout.less';

const Content = ContentWrapper(AppRouter);

function BlogLayout() {
    return (
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>
    );
}

export default BlogLayout;