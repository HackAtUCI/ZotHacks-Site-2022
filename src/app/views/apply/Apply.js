import React, { useEffect } from "react";

import "./Apply.scss";

const APPLICATION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfNpsv-oSYvlQQBYC1Gj1Z3xURWDPoKd5-nM-b89aUMGzRiOw/viewform";

function Apply() {
    useEffect(() => {
        // redirect to ZotHacks Application Google Form
        window.location.replace(APPLICATION_URL);
    }, []);

    return (
        <div className="apply">
            <h1>Redirecting to ZotHacks application...</h1>
        </div>
    );
}

export { Apply as default, APPLICATION_URL };