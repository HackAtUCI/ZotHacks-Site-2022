import React from "react";

import Fade from "react-reveal/Fade";

import { FAQCollapse } from "app/containers";
import { faqQuestions } from "assets/data/faq-questions";

import "./Faq.scss";

function Faq() {
	return (
		<section className="faq">
			<Fade duration={1000}>
				<h2>FAQ</h2>
				<div>
					{faqQuestions.map(function (item, index) {
						return (
							<FAQCollapse
								question={item.question}
								answer={item.answer}
								key={index}
							/>
						);
					})}
				</div>
			</Fade>
		</section>
	);
}

export default Faq;
