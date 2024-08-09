import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Page404 = () => {
  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>404</h1>
          <p>Page not found</p>
          <Button variant="primary" href="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;
