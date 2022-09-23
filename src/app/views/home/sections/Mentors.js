import React from "react";
import { Link } from "react-router-dom";

import mentorship from "assets/images/mentorship.png";
import mentorButton from "assets/images/mentorButton.png";

import "./Mentors.scss";

function Mentors() {
	return (
		<section className="mentors">
			<div className="card">
				<img src={mentorship} />
				<div className="mentor-information">
					<h2>Interested in becoming a mentor?</h2>
					<p className="card-text">
						Have hackathon experience and would love to share it with new
						developers? Apply to be a mentor for ZotHacks 2021!
					</p>
					<Link
						className="apply-button-wrapper"
						to={{ pathname: "https://airtable.com/shrbPw3zLgnVZkMkA" }}
						target="_blank"
						data-place="bottom"
						data-tip="Make sure to use your UCI email!"
					>
						<img
							type="image"
							className="apply-button"
							style={{
								height: "70px",
								width: "auto",
								marginTop: "0.5rem",
							}}
							src={mentorButton}
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Mentors;
