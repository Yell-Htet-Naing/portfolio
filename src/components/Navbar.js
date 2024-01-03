import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./All.module.css";
import DarkModeToggle from "./DarkModeToggle";
const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinkStyle = {
    color: "white", 
    transition: "color 0.3s ease-in-out", 
  };

  const activeLinkStyle = {
    color: "red", 
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="sm">
      <Container>
        <Navbar.Brand>Yell Htet Naing</Navbar.Brand>
        <DarkModeToggle/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto justify-content-end"
            style={{ width: "100%" }}
          >

            <Nav.Link
              href="#home"
              style={activeLink === "#home" ? activeLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutme"
              style={activeLink === "#aboutme" ? activeLinkStyle : navLinkStyle}
              onClick={() => handleLinkClick("#aboutme")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={
                activeLink === "#projects" ? activeLinkStyle : navLinkStyle
              }
              onClick={() => handleLinkClick("#projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              style={
                activeLink === "#contacts" ? activeLinkStyle : navLinkStyle
              }
              onClick={() => handleLinkClick("#contacts")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
