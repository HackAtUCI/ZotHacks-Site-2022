import React from "react"
import "./StarterPacks.scss"

import PinkStar from "../../../assets/images/pinkStar.svg";
import BlueStar from "../../../assets/images/blueStar.svg";
import ExternalLink from "../../containers/external-link/ExternalLink";

import { motion } from "framer-motion";

function StarterPacks() {
  return (
    <div className="StarterPacks">
      <h2 className="resources-main-title">Resources</h2>
      <section className="starter-pack-block">
        <div className="resource-title">
          <motion.img
              src={PinkStar}
              animate={{ rotate: 360 }}
              transition={{
                  duration: 10,
                  loop: Infinity,
                  ease: "linear",
              }}
              alt="star"
          />
          <h3>API Resources</h3>
          <motion.img
              src={BlueStar}
              animate={{ rotate: -360 }}
              transition={{
                  duration: 10,
                  loop: Infinity,
                  ease: "linear",
              }}
              alt="star"
          />
        </div>
        <p>
          Application Programming Interface (API) are interfaces or
          communication protocol that simplifies implementation and maintenance
          of software. In order to access most API's, many languages support
          HTTP protocol to communicate with the servers that host the API that
          retrieve data.
        </p>

          <h4>Public-API List</h4>
          <p>Use public-api api to retrieve a random API</p>
          <ExternalLink text="Public-API" to="https://github.com/public-apis/public-apis"/>

          <h4>PeterPortal Public API</h4>
          <p>PeterPortal Public API provides software developers with easy-access to UC Irvine publicly available data such as: courses information, professor information, grade distribution, and schedule of classes.</p>
          <ExternalLink text="Peter Portal API" to="https://api.peterportal.org/"/>

        {/*<h4>Spotify API</h4>*/}
        {/*<p>API that retrieves data on Spotify music, playlists, artists, and users.</p>*/}
        {/*<ExternalLink text="Spotify Web API Reference" to="https://developer.spotify.com/documentation/web-api/"/>*/}

        {/*<h4>Twitter API</h4>*/}
        {/*<p>API that retrieves data on tweets and trends.</p>*/}
        {/*<ExternalLink text="Twitter Web API Reference" to="https://developer.twitter.com/en/docs/twitter-api"/>*/}

        {/*<h4>Google Cloud API</h4>*/}
        {/*<p>*/}
        {/*  API that allows users to access Google services such as storage access*/}
        {/*  and machine-learning.*/}
        {/*</p>*/}
        {/*<ExternalLink text="Google Cloud API Reference" to="https://cloud.google.com/apis"/>*/}

      </section>
      <hr style={{width: "60vw", borderTop: "3px solid white", marginTop: "90px", marginBottom: "40px" }}/>
      <section id="starter-pack-block">
        <div className="resource-title">
          <motion.img
              src={BlueStar}
              animate={{ rotate: 360 }}
              transition={{
                  duration: 10,
                  loop: Infinity,
                  ease: "linear",
              }}
              alt="star"
          />
          <h3>Other Resources</h3>
          <motion.img
              src={PinkStar}
              animate={{ rotate: -360 }}
              transition={{
                  duration: 10,
                  loop: Infinity,
                  ease: "linear",
              }}
              alt="star"
          />
        </div>
        <h4>Frontend Starter Code</h4>
        <p>
          Frontend web development is the practice of producing HTML, CSS 
          and JavaScript for a website or web application that a user can 
          see and interact with.
        </p>
        <div className="external-link-list">
          <ExternalLink text="Frontend Example" to="https://github.com/derek-ye/frontend-demo"/>
        </div>
        <h4>Backend Starter Code</h4>
        <p>
          Backend frameworks are functional code skeletons that allows you to
          build custom REST APIs on your own server to store data, perform
          functions, and utilize templated tools.
        </p>
        <div className="external-link-list">
          <ExternalLink text="Simple Flask Example" to="https://github.com/hackuci/zothacks-backend-startercode"/>
          <ExternalLink text="Advanced Flask Example" to="https://github.com/hackuci/zothacks-2020-backend"/>
        </div>
        <h4>Git</h4>
        <p>
            If you want to learn and test your git skills, check out this tutorial! Here you will find a walk through of the basic git commands and principles, so that you can put them into practice with your hackathon team.
        </p>
        <div className="external-link-list">
          <ExternalLink text="Intro to Git" to="https://www.youtube.com/watch?v=hwP7WQkmECE"/>
          <ExternalLink text="Hack Git Workshop" to="https://github.com/zpinto/learn-git-with-hack"/>
        </div>
          <h4>Postman</h4>
          <p>
              Simulate a frontend through interacting with your backend with REST requests. Extremely helpful for backend developers, to allow simultaneous testing and developing.          </p>
          <div className="external-link-list">
              <ExternalLink text="Tutorial" to="https://www.guru99.com/postman-tutorial.html"/>
              <ExternalLink text="Download" to="https://www.getpostman.com/"/>
          </div>
          <h4>Ngrok</h4>
          <p>
              Generate a temporary public URL for your local backend. Easy backend deploying without having to use Heroku, AWS, or expensive cloud services.
          </p>
          <div className="external-link-list">
              <ExternalLink text="Tutorial" to="https://www.softwaretestinghelp.com/ngrok-introduction/"/>
              <ExternalLink text="Download" to="https://ngrok.io"/>
          </div>

      </section>
    </div>
  )
}

export default StarterPacks
