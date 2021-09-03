import React from "react"
import "./StarterPacks.scss"

import PinkStar from "../../../assets/images/pinkStar.svg";
import BlueStar from "../../../assets/images/blueStar.svg";
import ExternalLink from "../../containers/external-link/ExternalLink";

function StarterPacks() {
  return (
    <div className="StarterPacks">
      <h2 className="resources-main-title">Resources</h2>
      <section className="starter-pack-block">
        <div className="resource-title">
          <img src={PinkStar} alt="star"/>
          <h3>API Resources</h3>
          <img style={{transform: "scale(-1,1)"}} src={BlueStar} alt="star"/>
        </div>
        <p>
          Application Programming Interface (API) are interfaces or
          communication protocol that simplifies implementation and maintenance
          of software. In order to access most API's, many languages support
          HTTP protocol to communicate with the servers that host the API that
          retrieve data.
        </p>

        <h4>Spotify API</h4>
        <p>API that retrieves data on Spotify music, playlists, artists, and users.</p>
        <ExternalLink text="Spotify Web API Reference" to="https://developer.spotify.com/documentation/web-api/"/>

        <h4>Twitter API</h4>
        <p>API that retrieves data on tweets and trends.</p>
        <ExternalLink text="Twitter Web API Reference" to="https://developer.twitter.com/en/docs/twitter-api"/>

        <h4>Google Cloud API</h4>
        <p>
          API that allows users to access Google services such as storage access
          and machine-learning.
        </p>
        <ExternalLink text="Google Cloud API Reference" to="https://cloud.google.com/apis"/>

      </section>
      <hr style={{width: "60vw", borderTop: "3px solid white", marginTop: "90px", marginBottom: "40px" }}/>
      <section id="starter-pack-block">
        <div className="resource-title">
          <img src={BlueStar} alt="star"/>
          <h3>Backend Frameworks Resources</h3>
          <img style={{transform: "scale(-1,1)"}} src={PinkStar} alt="star"/>
        </div>
        <p>
          Backend frameworks are functional code skeletons that allows you to
          build custom REST APIs on your own server to store data, perform
          functions, and utilize templated tools.
        </p>
        <h4>Flask</h4>
        <p>
          A quick lightweight backend framework in Python. Build a quick REST
          server and serve HTML/CSS frontend tmeplates.
        </p>
        <div className="external-link-list">
          <ExternalLink text="Flask Documentation" to="https://flask.palletsprojects.com/en/1.1.x/api/"/>
          <ExternalLink text="Example Flask Template" to="https://github.com/hackuci/zothacks-2020-backend"/>
        </div>

      </section>
    </div>
  )
}

export default StarterPacks
