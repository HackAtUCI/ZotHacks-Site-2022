import React from "react";
import { Link } from "react-router-dom";

import mentorship from "assets/images/mentorship.png";
import mentorButton from "assets/images/mentorButton.png";

import "./Mentors.scss";

const MENTOR_APPLICATION_URL =
	"https://airtable.com/shr5B94rQ66KWH3Iw";

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
						data-place="bottom"
                        data-tip="Make sure to use your UCI email!"
					>
						<button className="mentor-apply-button">APPLY TO BE A MENTOR</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Mentors;
