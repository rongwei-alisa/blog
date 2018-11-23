import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './Header.module.less';

const { Header } = Layout;

function BlogHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>BLOG</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">Github</Menu.Item>
      </Menu>
    </Header>
  );
}

export default BlogHeader;