import React from "react";

import { PaperScroll } from "app/containers";
import zothacksLogo from "assets/icons/zothacks-logo.svg";

import "./Intro.scss";

function Intro() {
	return (
		<section className="container intro">
			<PaperScroll>
				<img className="zothacks-logo" src={zothacksLogo} alt="ZotHacks Logo" />
				<h2>What is ZotHacks?</h2>
				<p className="card-text">
					ZotHacks is a beginner-friendly hackathon where students with minimal
					computer science experience will learn to build their first CS
					project. Through ZotHacks, we introduce these students to the world of
					hackathons and web development by providing technical workshops,
					strong mentorship, and free food!
				</p>
			</PaperScroll>
		</section>
	);
}

export default Intro;
