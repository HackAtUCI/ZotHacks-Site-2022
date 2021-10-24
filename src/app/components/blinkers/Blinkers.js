import React from "react";
import "./Blinkers.scss";

function Blinkers({ blinkerCount }) {
    return (
        <div className="blinkers">
            {[...Array(blinkerCount)].map(function(z, index) {
                return <div className="blinker" key={index}/>;
            })}
        </div>
    );
}

export default Blinkers;