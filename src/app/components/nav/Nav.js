import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import zothacksLogo from "assets/images/zothacks_logo_rya 2.svg";

import "./Nav.scss";

const APPLICATION_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLSdPhGwP7KUTcIa6rWsPlyCswlykZwR-dXCJo78Gxahy0Q3sTA/viewform";

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
						<NavLinkItem to="/starter-packs">Resources</NavLinkItem>
						<NavLinkItem to="/schedule">Schedule</NavLinkItem>
						{/*<NavLinkItem to={{ pathname: APPLICATION_URL }}*/}
						{/*             target="_blank"*/}
						{/*             className="nav-link-outline">*/}
						{/*    Apply*/}
						{/*</NavLinkItem>*/}
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
