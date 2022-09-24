import React from "react";

import guayakiLogo from "assets/images/sponsors/guayaki.png";
import mtxLogo from "assets/images/sponsors/mtx_logo.png";

import "./Sponsors.scss";

function Sponsors() {
	return (
		<section className="sponsors">
			<div className="card">
				<h2>Thank You to our Sponsors!</h2>
				<div className="sponsor-logo-wrapper">
					<div>
						<a href="https://mtx.gg" target="_blank">
							<img className="sponsor-one" src={mtxLogo} alt="mtx logo" />
						</a>
					</div>
					<div>
						<a href="https://guayaki.com/" target="_blank">
							<img
								className="sponsor-two"
								src={guayakiLogo}
								alt="guayaki logo"
							/>
						</a>
					</div>
				</div>
				{/* <h3 className="sponsor-tier">Gold</h3>
					<div className="sponsor-logo-wrapper">
						<img src={zothacksLogo} />
						<img src={zothacksLogo} />
						<img src={zothacksLogo} />
					</div>
					<h3 className="sponsor-tier">Silver</h3>
					<div className="sponsor-logo-wrapper">
						<img src={zothacksLogo} />
						<img src={zothacksLogo} />
					</div> */}
			</div>
		</section>
	);
}

export default Sponsors;
