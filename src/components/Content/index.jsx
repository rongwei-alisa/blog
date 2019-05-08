import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import SideBar from 'components/SideBar';
import styles from './index.less';

const { Content } = Layout;

function ContentWrapper(WrappedComponent) {
  return class WrappingComponent extends Component {
    render() {
      return (
        <Content className={styles.container}>
          <Layout className={styles.layout}>
            <Row gutter={16}>
              <Col span={18}>
                <WrappedComponent />
              </Col>
              <Col span={6}>
                <SideBar />
              </Col>
            </Row>
          </Layout>
        </Content>
      );
    }
  }
}

export default ContentWrapper;