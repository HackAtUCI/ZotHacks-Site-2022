import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import ExternalLinkIcon from "assets/images/externalLink.svg";


import zothacksLogo from "assets/icons/zothacks-logo.svg";

import "./Nav.scss";

// import { APPLICATION_URL } from "app/views/apply/Apply";

function NavigationBar() {
	return (
		<Navbar id="app-navbar" expand="md" variant="dark">
			<Container fluid>
				<Navbar.Brand as={NavLink} end to="/">
					<img className="navbar-logo" src={zothacksLogo} alt="ZotHacks Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="inner-navbar-nav" />
				<Navbar.Collapse id="inner-navbar-nav">
					<Nav className="ms-auto" as="ul">
						<NavLinkItem end to="/">
							Home
						</NavLinkItem>
						{/* <NavLinkItem to="/starter-packs">Resources</NavLinkItem> */}
						{/* <NavLinkItem to="/schedule">Schedule</NavLinkItem> */}
						{/*
						<NavLinkItem as="a" href={APPLICATION_URL} target="_blank" rel="noreferrer" style={{ color: "white"}}>
							Apply
							<img className="external-link-icon" src={ExternalLinkIcon} alt="external link" />
						</NavLinkItem>
						*/}
					</Nav>
				</Navbar.Collapse>
			</Container>
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
