import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container className="login-bg flex-grow-1" fluid>
      <Row className="justify-content-md-center">
        <Col md={6} className="login-container">
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="w-100 d-flex justify-content-end">
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
