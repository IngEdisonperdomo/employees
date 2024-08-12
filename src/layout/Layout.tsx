import React from "react";
import { Content, Sidebar, Footer, Header } from "../components/index";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const DefaultLayout = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <Row className="flex-grow-1">
        <Col md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col md={10} className="ps-0 pe-0 d-flex flex-column">
          <Header />
          <Content />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
