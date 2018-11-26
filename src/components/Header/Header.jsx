import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Avatar, Badge, Icon, Divider, Input } from 'antd';
import styles from './Header.less';

const { Header } = Layout;
const { Search } = Input;

class BlogHeader extends Component {
  constructor(props) {
    super(props);

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onSignupClick = this.onSignupClick.bind(this);
    this.setRef = this.setRef.bind(this);
    this.onSearchFocus = this.onSearchFocus.bind(this);
    this.onSearchBlur = this.onSearchBlur.bind(this);

    this.state = {
      isLogin: false
    };
  }

  onLoginClick() {
    this.setState({ isLogin: !this.state.isLogin });
  }

  onSignupClick() {
    this.setState({ isLogin: !this.state.isLogin });
  }

  onSearch(value) {

  }

  setRef(ref) {
    this.searchRef = ref;
  }

  onSearchFocus() {
    const searchNode = ReactDOM.findDOMNode(this.searchRef);
    searchNode.style.width = '150px';
  }

  onSearchBlur() {
    const searchNode = ReactDOM.findDOMNode(this.searchRef);
    searchNode.style.width = '100px';
  }

  render() {
    const { isLogin } = this.state;

    return (
      <Header className={styles.header}>
        <div className={styles.logo}>Alisa 的博客</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">Github</Menu.Item>
        </Menu>
        <div className={styles.rightNav}>
          <Search
            placeholder="搜索文章"
            onSearch={this.onSearch}
            onFocus={this.onSearchFocus}
            onBlur={this.onSearchBlur}
            ref={this.setRef}
          />
          {isLogin ?
            <Badge dot title="您有新消息啦">
              <Avatar alt="Avatar">Alisa</Avatar>
            </Badge>
            :
            <Fragment>
              <span className={styles.add}><Icon type="edit" /> 写文章</span>
              <Divider type="vertical" />
              <span className={styles.login} onClick={this.onLoginClick}>登录</span>
              <span className={styles.signup} onClick={this.onSignupClick}>注册</span>
            </Fragment>
          }
        </div>
      </Header >
    );
  }
}

export default BlogHeader;