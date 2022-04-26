import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase-init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={30} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link href="/#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/addservice">
                    Add Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage_services">
                    Manage Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders">
                    Orders
                  </Nav.Link>
                  <Button onClick={handleSignOut}>Log Out</Button>
                </>
              ) : (
                <Nav.Link as={Link} to="login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
