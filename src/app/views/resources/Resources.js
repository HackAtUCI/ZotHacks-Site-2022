import React from "react"
import "./Resources.scss"

import { Footer } from "app/components"

import ExternalLink from "../../containers/external-link/ExternalLink";

import resources_tools from "assets/images/resources_tools.svg";

function Resources() {
  return (
    <div className="Resources container">
      <img className="resources-main-img" src={resources_tools} alt="Backpack and Tools" />
      <h1 className="resources-main-title">Resources</h1>
      <section id="api-resources">
        <h2 className="resource-title">API Resources</h2>
        <p>
          An Application Programming Interface (API) is an interface or
          communication protocol that simplifies implementation and maintenance
          of software. In order to access most APIs, many programming languages support
          HTTP protocol to communicate and retrieve data from the servers that host the API.
        </p>
        <div className="row">
          <div className="col-xs-1 col-md-6 resource-border resource-component">
            <h3>Public-API List</h3>
            <p>Don't have an API in mind? Use Public-API to retrieve a random API to use for your project!</p>
            <div className="resource-link">
              <ExternalLink className="resource-link" text="Public-API" to="https://github.com/public-apis/public-apis" />
            </div>
          </div>

          <div className="col-xs-1 col-md-6 resource-component">
            <h3>PeterPortal Public API</h3>
            <p>
              PeterPortal Public API provides software developers easy-access to UC
              Irvine's publicly available data such as: courses information, professor
              information, grade distribution, and schedule of classes.
            </p>
            <ExternalLink text="Peter Portal API" to="https://api.peterportal.org/" />
          </div>
        </div>
      </section>
      <hr/>
      <section id="frontend-resources">
        <h2 className="resource-title">Frontend Resources</h2>
        <p>
          Frontend web development is the practice of producing an interface for a website
          or web application that a user can see and interact with.
        </p>
        <div className="row">
          <div className="col-xs-1 col-md-6 resource-border resource-component">
            <h3>Frontend Starter Code</h3>
            <p>A basic webpage built using HTML, CSS, and JavaScript.</p>
            <div className="resource-link">
              <ExternalLink text="Frontend Example" to="https://github.com/HackAtUCI/zothacks-frontend-startercode"/>
            </div>
          </div>

          <div className="col-xs-1 col-md-6 resource-component">
            <h3>Hack Frontend Workshop</h3>
            <p>Learn about basic web development using HTML, CSS, and Vanilla JavaScript!</p>
            <div className="resource-link">
              <ExternalLink text="Workshop Code" to="https://github.com/RandyHuynh5815/vanilla-js-workshop"/>
            </div>
            <div className="resource-link-2">
              <ExternalLink text="Workshop Recording" to="https://drive.google.com/file/d/15y8sss69kVOvaE38idujRrdOKZNiTUY8/view"/>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section id="backend-resources">
        <h2 className="resource-title">Backend Resources</h2>
        <p>
          Backend frameworks are functional code skeletons that allows you to
          build custom REST APIs on your own server to store data, perform
          functions, and utilize templated tools.
        </p>
        <div className="row">
          <div className="col-xs-1 col-md-6 resource-border resource-component">
            <h3>Backend Starter Code</h3>
            <p>A basic backend application built using Python and Flask.</p>
            <div className="resource-link">
              <ExternalLink text="Simple Flask Example" to="https://github.com/hackuci/zothacks-backend-startercode"/>
            </div>
          </div>

          <div className="col-xs-1 col-md-6 resource-component">
            <h3>Advanced Backend Code</h3>
            <p>
              This example further explores Flask and demonstrates
              how it can be used to connect with your own MongoDB database.
            </p>
            <div className="resource-link">
              <ExternalLink text="Advanced Flask Example" to="https://github.com/hackuci/zothacks-2020-backend"/>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section id="other-resources">
        <h2 className="resource-title">Other Resources</h2>
        <div className="row">
          <div className="col-xs-1 col-md-4 resource-border resource-component">
            <h3>Git</h3>
            <p>
              If you want to learn and test your git skills, check out this tutorial!
              Here you will find a walk through of the basic git commands and principles,
              so that you can put them into practice with your hackathon team.
            </p>
            <div className="resource-link">
              <ExternalLink text="Intro to Git" to="https://www.youtube.com/watch?v=hwP7WQkmECE" />
            </div>
            <div className="resource-link-2">
              <ExternalLink text="Hack Git Workshop" to="https://github.com/zpinto/learn-git-with-hack" />
            </div>
          </div>

          <div className="col-xs-1 col-md-4 resource-border resource-component">
            <h3>Postman</h3>
            <p>
              Simulate a frontend by interacting with your backend with
              REST requests. Extremely helpful for backend developers to allow
              simultaneous testing and developing.
            </p>
            <div className="resource-link">
              <ExternalLink text="Tutorial" to="https://www.guru99.com/postman-tutorial.html" />
            </div>
            <div className="resource-link-2">
              <ExternalLink text="Download" to="https://www.getpostman.com/"/>
            </div>
          </div>
          
          <div className="col-xs-1 col-md-4 resource-component">
            <h3>Ngrok</h3>
            <p>
              Generate a temporary public URL for your local backend.
              Easy backend deploying without having to use Heroku, AWS, or
              expensive cloud services.
            </p>
            <div className="resource-link">
              <ExternalLink text="Tutorial" to="https://danielmiessler.com/study/ngrok/#intro" />
            </div>
            <div className="resource-link-2">
              <ExternalLink text="Download" to="https://ngrok.io"/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Resources
