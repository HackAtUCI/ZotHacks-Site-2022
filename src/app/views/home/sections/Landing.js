import React from "react";

import Fade from "react-reveal/Fade";

import "./Landing.scss";
import jeepBody from "assets/images/jeep_body.png";
import jeepWheels from "assets/images/jeep_wheels.png"

const APPLICATION_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLSdPhGwP7KUTcIa6rWsPlyCswlykZwR-dXCJo78Gxahy0Q3sTA/viewform";

function Landing() {
	return (
		<section className="landing">
			<div className="intro-wrapper">
				<div className="title-info">
					<Fade duration={1000} left>
						<div className="jeep-wrapper">
							<img src={jeepBody} />
							<img src={jeepWheels} />
						</div>
					</Fade>
					<Fade duration={1000} right>
						<div className="hero-wrapper">
							<h1 className="glow">ZotHacks</h1>
							<span className="h3">November 20-21, 2021</span>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
}

export default Landing;
