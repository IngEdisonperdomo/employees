import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Dropdown,
  Badge,
  Modal,
  Button,
} from "react-bootstrap";
import { FaUser, FaBell } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleShowProfile = () => setShowProfileModal(true);
  const handleCloseProfile = () => setShowProfileModal(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="navbar-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle as={Nav.Link}>
                  <FaBell />
                  <Badge pill bg="danger">
                    2
                  </Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#notification1">
                    Notification 1: You have a new message.
                  </Dropdown.Item>
                  <Dropdown.Item href="#notification2">
                    Notification 2: Your profile was viewed.
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavDropdown title={<FaUser />} id="user-dropdown" align="end">
                <NavDropdown.Item onClick={handleShowProfile}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showProfileModal} onHide={handleCloseProfile}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Profile details go here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
