import React from "react";
import Reveal from "react-reveal/Reveal";

import "./PaperScroll.scss";

function PaperScroll({ children }) {
	return (
		<Reveal effect="unroll-scroll" duration={2000} delay={100}>
			<div className="paper-scroll-card">
				<div className="scroll-edge-start" />
				<div className="card-body">{children}</div>
				<div className="scroll-edge-end" />
			</div>
		</Reveal>
	);
}

export default PaperScroll;
