import React from "react";

import "./PaperScroll.scss";

function PaperScroll({ children }) {
	return (
		<div className="paper-scroll-card">
			<div className="card-body">{children}</div>
		</div>
	);
}

export default PaperScroll;
