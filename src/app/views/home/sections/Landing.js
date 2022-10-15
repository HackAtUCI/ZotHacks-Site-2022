import React from "react";

import Fade from "react-reveal/Fade";

import "./Landing.scss";
import jeepBody from "assets/images/jeep_body.png";
import jeepWheels from "assets/images/jeep_wheels.png";

import { APPLICATION_URL } from "app/views/apply/Apply";

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
					<span className="h3">November 5&ndash;6, 2022</span>
					<a
						className="btn apply-link"
						href={APPLICATION_URL}
						target="_blank"
						rel="noreferrer"
						data-place="bottom"
                        data-tip="Make sure to use your UCI email!"
					>
						Apply
					</a>
				</div>
			</Fade>
		</section>
	);
}

export default Landing;
