import React from "react";
import "./Blinkers.scss";

function Blinkers({ blinkerCount }) {
    return (
        <div className="fireflies">
            {[...Array(blinkerCount)].map(function(z, index) {
                return <div className="firefly" key={index}/>;
            })}
        </div>
    );
}

export default Blinkers;