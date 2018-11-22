import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import SideBar from '../../components/SideBar';

const { Content } = Layout;

function ContentPage(WrappedComponent) {
  return class WrappingComponent extends Component {
    render() {
      return (
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0'}}>
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

export default ContentPage;