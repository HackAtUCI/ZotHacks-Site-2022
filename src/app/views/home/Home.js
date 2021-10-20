import React from "react"
import "./Home.scss"
import { faqQuestions } from "assets/data/faq-questions"

import { Button } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"
import { Blinkers } from "app/components";

import { FAQCollapse } from "app/containers"
import clawmachineFront from "assets/images/claw-machine-front.svg"
import clawmachineBack from "assets/images/claw-machine-back.svg"
import clawAndAnteater from "assets/images/claw-and-anteater.svg"
import starBanner from "assets/images/starBanner.png"
import ticketBanner from "assets/images/ticketBanner.png"
import mentorship from "assets/images/mentorship.png"
import planetOne from "assets/images/planetOne.png"
import planetTwo from "assets/images/planetTwo.png"
import pixelWaveUp from "assets/images/pixel_wave_up.png"
import pixelWaveDown from "assets/images/pixel_wave_down.png"
import applyButton from "assets/images/applyButton.png"
import digitalOcean from "assets/images/sponsors/digitalOcean.png"
import voiceflow from "assets/images/sponsors/voiceflow.png"
import danaher from "assets/images/sponsors/danaher.png"
import zillow from "assets/images/sponsors/zillow.png"
import github from "assets/images/sponsors/github.png"
import zothacksLogo from "assets/images/zothacks_logo_rya 2.svg"

function Home() {
  return (
    <div className="Home">
      <Blinkers blinkerCount={40}/>
     <ReactTooltip />
      <section id="intro">
        <div className="intro-wrapper">
          <div className="title-info">
            <Fade duration={1000} left>
              <div className="hero-wrapper">
                <h1 className="glow">ZotHacks</h1>
                <h4>November 12-14th</h4>
                <a
                  className="apply-button-wrapper"
                  href="https://docs.google.com/forms/d/1XEgtds8wQVdUE3twqtEiliXkmVtziUWL585culM4-Ps"
                  data-place="bottom"
                  data-tip="Make sure to use your UCI email!"
                >
                  <img
                  type="image"
                  className="apply-button"
                  style={{
                    height: "70px",
                    marginTop: "0.5rem",
                  }}
                    src={applyButton}
                  >
                  </img>
                </a>
              </div>
            </Fade>
            
            <div className="claw-machine-wrapper">
              <motion.img
                  className="claw-machine"
                  src={clawmachineBack}
                  animate={{}}
                  transition={{
                    duration: 5,
                    loop: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  className="claw-machine claw-and-anteater"
                  src={clawAndAnteater}
                  animate={{y: [-25, 25, -25]}}
                  transition={{
                    duration: 10,
                    loop: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  className="claw-machine claw-machine-back"
                  src={clawmachineFront}
                  animate={{}}
                  transition={{
                    duration: 5,
                    loop: Infinity,
                    ease: "easeInOut",
                  }}
                />   
            </div>
          </div>
        </div>
        <img className="wave-border sin-wave--one" src={pixelWaveUp} />
      </section>
      <section id="info">
      <img className="banner star-banner" src={starBanner} />
        <div className="card">
          <Fade duration={1000}>
            <img className="zothacks-logo" src={zothacksLogo} />
            <h2>What is ZotHacks?</h2>
            <p className="card-text">
              ZotHacks is a beginner-friendly hackathon where students with
              minimal computer science experience will learn to build and build
              their first CS project. Through ZotHacks, we introduce these
              students to the world of hackathons and web development by
              providing technical workshops, strong mentorship, and
              virtual-friendly events!
            </p>
          </Fade>
        </div>
      </section>
      <section id="mentors">
        <img className="mentors-butterfly --one" src={planetOne} />
        <div className="card">
          <Fade duration={1000}>
            <img src={mentorship} />
            <div className="mentor-information card-text">
              <h2>Interested in becoming a mentor?</h2>
              <p className="">
                Have hackathon experience and would love to share it with new
                developers? Apply to be a mentor for ZotHacks 2021!
              </p>
              <a
                href="https://airtable.com/shrbPw3zLgnVZkMkA"
                data-place="bottom"
                data-tip="Make sure to use your UCI email!"
              >
                <Button
                  style={{
                    borderRadius: "10px",
                    width: "220px",
                    backgroundColor: "#E2B7F7",
                    height: "40px",
                    fontWeight: "bold",
                    color: "black",
                    filter: "drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2))"
                  }}
                >
                  APPLY TO BE A MENTOR
                </Button>
              </a>
            </div>
          </Fade>
        </div>
        <img className="mentors-butterfly --two" src={planetTwo} />
      </section>
      <section id="sponsors">
        <img className="banner ticket-banner" src={ticketBanner} />
        <div className="card">
          <Fade duration={1000}>
            <h2>Sponsors</h2>
            <h3 className="sponsor-tier">Gold</h3>
            <div className="sponsor-logo-wrapper">
              <img src={zothacksLogo}></img>
              <img src={zothacksLogo}></img>
              <img src={zothacksLogo}></img>
            </div>
            <h3 className="sponsor-tier">Silver</h3>
            <div className="sponsor-logo-wrapper">
              <img src={zothacksLogo}></img>
              <img src={zothacksLogo}></img>
            </div>
          </Fade>
        </div>
      </section>
     <section id="faq">
        <img className="wave-border sin-wave--two" src={pixelWaveDown} />
        <Fade duration={1000}>
          <h2>FAQ</h2>
          <div>
            {faqQuestions.map(function (item, index) {
              return (
                <FAQCollapse
                  question={item.question}
                  answer={item.answer}
                  key={index}
                />
              )
            })}
          </div>
        </Fade>
      </section>
        <section id="credits">

      </section>
    </div>
  )
}

export default Home
