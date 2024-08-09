import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <Container className="register-bg flex-grow-1" fluid>
      <Row className="justify-content-center">
        <Col md={6} className="register-container">
          <h1 className="text-center">Register</h1>
          <Form>
            <Form.Group controlId="formBasicUsername" className="mt-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <div className="w-100 d-flex justify-content-end">
              <Button variant="primary" type="submit" className="mt-4">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
