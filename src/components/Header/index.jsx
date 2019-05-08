import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import modalManager from 'utils/modalManager';
import { Layout, Menu, Avatar, Badge, Icon, Divider, Input } from 'antd';
import AuthModal from 'components/AuthModal';
import styles from './index.less';

const { Header } = Layout;
const { Search } = Input;

const Logo = () => (<div className={styles.logo}>Alisa 的博客</div>);

const Auth = (props) => (
  <>
    <span className={styles.add} >
      <Link to="/article/new/edit"><Icon type="edit" /> 写文章</Link>
    </span>
    <Divider type="vertical" />
    <span className={styles.login} onClick={props.onLoginClick}>登录</span>
    <span className={styles.signup} onClick={props.onSignupClick}>注册</span>
  </>
);

class BlogHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    };
    this.searchRef = React.createRef();
  }

  onLoginClick = () => {
    modalManager.open({
      component: AuthModal,
      componentProps: {
        title: '登录'
      }
    }).then(() => {
      this.setState({ isLogin: !this.state.isLogin });
    });
  }

  onSignupClick = () => {
    this.setState({ isLogin: !this.state.isLogin });
  }

  onSearch(value) {

  }

  onSearchFocus = () => {
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
        <Logo />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
          <Menu.Item key="2"><a href="https://github.com/rongwei-alisa">Github</a></Menu.Item>
        </Menu>
        <div className={styles.rightNav}>
          <Search
            placeholder="搜索文章"
            onSearch={this.onSearch}
            onFocus={this.onSearchFocus}
            onBlur={this.onSearchBlur}
            ref={this.searchRef}
          />
          {isLogin ?
            <Badge dot title="您有新消息啦">
              <Avatar alt="Avatar">Alisa</Avatar>
            </Badge>
            :
            <Auth
              onLoginClick={this.onLoginClick}
              onSignupClick={this.onSignupClick}
            />
          }
        </div>
      </Header >
    );
  }
}

export default BlogHeader;