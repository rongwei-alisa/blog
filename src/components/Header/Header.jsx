import React from 'react';
import { Layout, Menu, Avatar, Badge } from 'antd';
import styles from './Header.module.less';

const { Header } = Layout;
const isLogin = true;

function BlogHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>Alisa's Blog</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">Github</Menu.Item>
      </Menu>
      <div className={styles.rightNav}>
        {isLogin ?
          <div>
            <Badge dot title="您有新消息啦">
              <Avatar alt="Avatar">Alisa</Avatar>
            </Badge>
          </div>
          :
          <div></div>
        }
      </div>
    </Header>
  );
}

export default BlogHeader;