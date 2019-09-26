import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Footer from './footer';
import Header from './header';
import Map from './map';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Container>
        <header>
          Header goes here.
        </header>
        <Row>
          <Col xs='4'>
            Inventory goes here.
          </Col>
        </Row>
        <Map />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
