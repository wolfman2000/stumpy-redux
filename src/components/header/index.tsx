import * as React from 'react';
import { Alert, Container, Jumbotron } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Jumbotron >
        <Container>
          <Alert variant='success'>Welcome to Stumpy Redux!</Alert>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default Header;
