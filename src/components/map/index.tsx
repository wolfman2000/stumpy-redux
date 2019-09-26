import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
          Dark World
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
