import React from "react";

import { ReactComponent as ZothacksLogo } from "assets/icons/zothacks-logo.svg";

import "./Intro.scss";

function Intro() {
	return (
		<section className="intro">
			<div className="card">
				<ZothacksLogo className="zothacks-logo" fill="#1D6C38" />
				<h2>What is ZotHacks?</h2>
				<p className="card-text">
					ZotHacks is a beginner-friendly hackathon where students with minimal
					computer science experience will learn to build their first CS
					project. Through ZotHacks, we introduce these students to the world of
					hackathons and web development by providing technical workshops,
					strong mentorship, and free food!
				</p>
			</div>
		</section>
	);
}

export default Intro;
