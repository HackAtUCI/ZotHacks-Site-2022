import React from "react";
import './Footer.scss';

import MailIcon from "assets/icons/mail_icon.svg";
import FacebookIcon from "assets/icons/facebook_icon.svg";
import InstagramIcon from "assets/icons/instagram_icon.svg";
import LinkedInIcon from "assets/icons/linkedin_icon.svg";
import YouTubeIcon from "assets/icons/youtube_icon.svg";

function Footer() {
    return (
        <div className="footer">
            <p>Made with 💖 in Irvine, CA - Hack at UCI</p>
            <div className="footer-socials">
                <a href="mailto:hack@uci.edu"><img src={MailIcon} alt="Mail"/></a>
                <a href="https://www.facebook.com/UCI.Hack/"><img src={FacebookIcon} alt="Facebook"/></a>
                <a href="https://www.instagram.com/hackatuci/"><img src={InstagramIcon} alt="Instagram"/></a>
                <a href="https://www.linkedin.com/company/hackuci"><img src={LinkedInIcon} alt="LinkedIn"/></a>
                <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ"><img src={YouTubeIcon} alt="YouTube"/></a>
            </div>
        </div>
    )
}

export default Footer;