import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column sidebar">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  );
};

export default Sidebar;
