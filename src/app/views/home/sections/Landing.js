import React from "react";

import Fade from "react-reveal/Fade";

import "./Landing.scss";
import jeepBody from "assets/images/jeep_body.png";
import jeepWheels from "assets/images/jeep_wheels.png"

const APPLICATION_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLSdPhGwP7KUTcIa6rWsPlyCswlykZwR-dXCJo78Gxahy0Q3sTA/viewform";

function Landing() {
	return (
		<section className="container landing">
			<Fade duration={1000} left>
				<div className="jeep-wrapper">
					<img src={jeepBody} alt="Jeep's Body" />
					<img src={jeepWheels} alt="Jeep's Wheels" />
				</div>
			</Fade>
			<Fade duration={1000} right>
				<div className="landing-title">
					<h1>ZotHacks</h1>
					<span className="h3">November 5, 2022</span>
				</div>
			</Fade>
		</section>
	);
}

export default Landing;
