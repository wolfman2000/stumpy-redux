import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>
              Source code for this tracker is available on
              <a href='https://github.com/wolfman2000/stumpy-redux'> Github</a>.
              Please support the <a href='https://alttpr.com/'>LttP Randomizer</a>.
            </p>
            <p>
              Shout-outs to <a href='https://www.twitch.tv/crossproduct'>Crossproduct</a>
              , <a href='https://alttp.orphis.net'>Orphis</a>
              , and <a href='https://lttp-tracker.firebaseapp.com/'>Pickfifteen</a> for their
              prior tracker work and logic. This could not have been built without their assistance.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
