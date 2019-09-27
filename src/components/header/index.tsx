import * as React from 'react';
import { Alert, Container, Jumbotron } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Alert variant='success'>Welcome to Stumpy Redux!</Alert>
      </Container>
    </header>
  );
};

export default Header;
