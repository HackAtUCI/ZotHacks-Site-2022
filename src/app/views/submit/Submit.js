import React, { useEffect } from "react";

export const DEVPOST_URL= "https://zothacks-2022.devpost.com";

function Submit() {
    useEffect(() => {
        // redirect to ZotHacks Devpost
        window.location.replace(DEVPOST_URL);
    }, []);

    return (
        <div className="submit">
            <h1>Redirecting to ZotHacks Devpost...</h1>
        </div>
    );
}

export default Submit;