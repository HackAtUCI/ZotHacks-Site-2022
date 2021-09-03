import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Nav.scss';

import { Link, useLocation } from "react-router-dom";

import logo from 'assets/images/zothacks_logo_rya 2.svg';

function NavigationBar() {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");

  useEffect(() => {
    setcurrentPath(location.pathname);
    console.log(location.pathname);
  }, [location]);


  return (
    <Navbar className="nav" expand="lg" variant="dark">
      <Navbar.Brand className="nav-left">
        <Nav.Link href="/">
          <Link to="/">
            <img src={logo} alt="Zothacks Logo"></img>
          </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="inner-navbar-nav"/>
      <Navbar.Collapse id="inner-navbar-nav">
        <Nav className="nav-right ml-auto">
          <Nav.Link>
            <Link to="/">
              <p className={currentPath === "/" && "selected"}>
                Home
              </p>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/starter-packs">
              <p className={currentPath.includes("/starter-packs") && "selected"}>
                Resources
              </p>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/schedule">
              <p className={currentPath.includes("/schedule") && "selected"}>
                Schedule
              </p>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;