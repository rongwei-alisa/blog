import React from 'react';
import { Layout, Menu } from 'antd';

const { Header }  = Layout;

function BlogHeader() {
  return (
    <Header className="header">
      <div className="logo">BLOG</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">Github</Menu.Item>
      </Menu>
    </Header>
  );
}

export default BlogHeader;