import React from "react";
import Fade from "react-reveal/Fade";
import ReactTooltip from "react-tooltip";

import { Footer } from "app/components";

import Landing from "./sections/Landing";
import Intro from "./sections/Intro";
import Mentors from "./sections/Mentors";
// import Sponsors from "./sections/Sponsors";
import Faq from "./sections/Faq";

import "./Home.scss";

function Home() {
	return (
		<div className="home">
			<ReactTooltip />

			<Landing />
			{/* <Fade duration={1000}> */}
				<Intro />
			{/* </Fade> */}
			<Fade duration={1000}>
				<Mentors />
			</Fade>
			{/* <Fade duration={1000}>
				<Sponsors />
			</Fade> */}
			<Faq />
			<Footer />
		</div>
	);
}

export default Home;
