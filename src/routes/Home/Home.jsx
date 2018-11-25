import React from 'react';
import { Row, Col } from 'antd';
import { ArticleSummary as Card } from 'components/Article';
import styles from './Home.less';

const data = [1, 1, 1, 1, 1, 1, 1];

function Home(props) {
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        {data.map((d, index) => {
          return (
            <Col xs={24} sm={24} md={12} xxl={6} key={index}>
              <Card />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;