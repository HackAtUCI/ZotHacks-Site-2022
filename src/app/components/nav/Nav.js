import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import zothacksLogo from "assets/images/zothacks_logo_rya 2.svg";

import "./Nav.scss";

function NavigationBar() {
  return (
    <Navbar id="app-navbar" expand="md" variant="dark">
      <Navbar.Brand as={NavLink} exact to="/">
        <img className="navbar-logo" src={zothacksLogo} alt="ZotHacks Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="inner-navbar-nav" />
      <Navbar.Collapse id="inner-navbar-nav">
        <Nav className="ml-auto" as="ul">
          <NavLinkItem exact to="/">
            Home
          </NavLinkItem>
          <NavLinkItem to="/apply" className="nav-link-outline">
            Apply
          </NavLinkItem>
          {/* <NavLinkItem to="/starter-packs">Resources</NavLinkItem> */}
          {/* <NavLinkItem to="/schedule">Schedule</NavLinkItem> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavLinkItem(props) {
  return (
    <Nav.Item as="li">
      <Nav.Link as={NavLink} {...props} />
    </Nav.Item>
  );
}

export default NavigationBar;
