import React from "react";
import "./Footer.scss";

import MailIcon from "assets/icons/mail_icon.svg";
import FacebookIcon from "assets/icons/facebook_icon.svg";
import InstagramIcon from "assets/icons/instagram_icon.svg";
import LinkedInIcon from "assets/icons/linkedin_icon.svg";
import YouTubeIcon from "assets/icons/youtube_icon.svg";

const SOCIALS = [
	{
		link: "mailto:hack@uci.edu",
		icon: MailIcon,
		alt: "Mail",
	},
	{
		link: "https://www.facebook.com/UCI.Hack/",
		icon: FacebookIcon,
		alt: "Facebook",
	},
	{
		link: "https://www.instagram.com/hackatuci/",
		icon: InstagramIcon,
		alt: "Instagram",
	},
	{
		link: "https://www.linkedin.com/company/hackuci",
		icon: LinkedInIcon,
		alt: "LinkedIn",
	},
	{
		link: "https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ",
		icon: YouTubeIcon,
		alt: "YouTube",
	},
];

function Footer() {
	return (
		<div className="footer">
			<p>Made with 💖 in Irvine, CA - Hack at UCI</p>
			<div className="footer-socials">
				{SOCIALS.map(({ link, icon, alt }) => (
					<a key={link} href={link} target="_blank" rel="noreferrer">
						<img src={icon} alt={alt} />
					</a>
				))}
			</div>
		</div>
	);
}

export default Footer;
