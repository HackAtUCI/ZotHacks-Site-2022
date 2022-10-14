import React from "react";

import mentorship from "assets/images/mentorship.png";

import "./Mentors.scss";

const MENTOR_APPLICATION_URL = "https://airtable.com/shr5B94rQ66KWH3Iw";

function Mentors() {
	return (
		<section className="mentors">
			<div className="card">
				<img src={mentorship} />
				<div className="mentor-information">
					<h2>Interested in becoming a mentor?</h2>
					<p className="card-text">
						Have hackathon experience and would love to share it with new
						developers? Apply to be a mentor for ZotHacks 2022!
					</p>
					<a
						href={MENTOR_APPLICATION_URL}
						target="_blank"
						rel="noreferrer"
						className="btn mentor-apply-button"
						data-place="bottom"
						data-tip="Make sure to use your UCI email!"
					>
						Apply to be a Mentor
					</a>
				</div>
			</div>
		</section>
	);
}

export default Mentors;
