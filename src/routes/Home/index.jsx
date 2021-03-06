import React from 'react';
import { Row, Col } from 'antd';
import { ArticleSummary as Card } from 'components/Article';
import styles from './index.less';

const data = [1, 1, 1, 1, 1, 1];

const Home = () => (
  <div className={styles.container}>
    <Row gutter={16}>
      {data.map((d, index) => {
        return (
          <Col xs={24} sm={24} md={12} xxl={12} key={index}>
            <Card />
          </Col>
        );
      })}
    </Row>
  </div>
);

export default Home;