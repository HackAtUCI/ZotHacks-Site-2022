import React from 'react';
import ExternalLinkIcon from "../../../assets/images/externalLink.svg";

import "./ExternalLink.scss";

function ExternalLink({text, to}) {
    return (
        <div className="external-link-button">
            <a className="external-link-text"
                href={to} target="_blank" rel="noopener noreferrer">
                {text} <img src={ExternalLinkIcon} alt="external link"/>
            </a>
        </div>
    )
}

export default ExternalLink;