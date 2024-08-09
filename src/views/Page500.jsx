import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Page505 = () => {
  return (
    <Container className="text-center">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>505</h1>
          <p>HTTP Version Not Supported</p>
          <Button variant="primary" href="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Page505;
