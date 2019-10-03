import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import DarkWorld from './dark-world';
import LightWorld from './light-world';

const Map: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>Possible caption.</Col>
      </Row>
      <Row>
        <Col xs={6}>
          <LightWorld />
        </Col>
        <Col xs={6}>
          <DarkWorld />
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
