import React from "react"
import "./Home.scss"
import { faqQuestions } from "assets/data/faq-questions"

import { Button } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"
import { Blinkers } from "app/components";

import { FAQCollapse } from "app/containers"
import zothacksSucc from "assets/images/zothacksucc.png"
import bubbles from "assets/images/bubbles.png"
import mentorship from "assets/images/mentorship.png"
import butterflyOne from "assets/images/butterflyOne.png"
import butterflyTwo from "assets/images/butterflyTwo.png"
import sinWaveOne from "assets/images/white_sinewave_1.png"
import sinWaveTwo from "assets/images/white_sinewave_2.png"
import digitalOcean from "assets/images/sponsors/digitalOcean.png"
import voiceflow from "assets/images/sponsors/voiceflow.png"
import danaher from "assets/images/sponsors/danaher.png"
import zillow from "assets/images/sponsors/zillow.png"
import github from "assets/images/sponsors/github.png"

function Home() {
  return (
    <div className="Home">
      <ReactTooltip />
      <Blinkers blinkerCount={50}/>
      <section id="intro">
        <div className="intro-wrapper">
          <div className="title-info">
            <Fade duration={1000} left>
              <div>
                <h1>ZotHacks</h1>
                <h4>November 13-15th</h4>
                <a
                  href="https://docs.google.com/forms/d/1XEgtds8wQVdUE3twqtEiliXkmVtziUWL585culM4-Ps"
                  data-place="bottom"
                  data-tip="Make sure to use your UCI email!"
                >
                  <Button
                    style={{
                      borderRadius: "50px",
                      width: "100px",
                      backgroundColor: "#F95C6F",
                      height: "40px",
                    }}
                  >
                    Apply
                  </Button>
                </a>
              </div>
            </Fade>
            <div className="zucc-wrapper">
              <motion.img
                className="zucc-butterfly"
                src={butterflyTwo}
                animate={{
                  rotate: [1, 3, 2, 5, 1, 2, 3, 1],
                  y: [20, 10, 20],
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                className="succulent"
                src={zothacksSucc}
                animate={{
                  y: [20, 10, 20],
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="zucc-shadow"
                animate={{
                  scale: [1.3, 1, 1.3],
                  y: [-15, -15, -15],
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
        <img className="sin-wave sin-wave--one" src={sinWaveOne} />
      </section>
      <section id="info">
        <img src={bubbles} />
        <div>
          <Fade duration={1000}>
            <h2>What is ZotHacks?</h2>
            <p>
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
        <img className="mentors-butterfly --one" src={butterflyOne} />
        <div>
          <img src={mentorship} />
          <div className="mentor-information">
            <h3>Interested in becoming a mentor?</h3>
            <p>
              Have hackathon experience and would love to share it with new
              developers? Apply to be a mentor for ZotHacks 2020!
            </p>
            <a
              href="https://docs.google.com/forms/d/1hCRUwgHL485K8O_OXVOohpAU0U_jqqpbHctsu6i4mdk"
              data-place="bottom"
              data-tip="Make sure to use your UCI email!"
            >
              <Button
                style={{
                  borderRadius: "50px",
                  width: "200px",
                  backgroundColor: "#F95C6F",
                  height: "40px",
                }}
              >
                Apply to be a Mentor
              </Button>
            </a>
          </div>
        </div>
        <img className="mentors-butterfly --two" src={butterflyTwo} />
      </section>
      <section id="sponsors">
        <Fade duration={1000}>
          <h2>Sponsors</h2>
          <h3>Gold Sponsors</h3>
          <div className="sponsor-logo-wrapper">
            <img src={danaher}></img>
            <img src={zillow}></img>
            <img src={github}></img>
          </div>
          <h3>Silver Sponsors</h3>
          <div className="sponsor-logo-wrapper">
            <img src={digitalOcean}></img>
            <img src={voiceflow}></img>
          </div>
        </Fade>
      </section>
      <section id="faq">
        <img className="sin-wave sin-wave--two" src={sinWaveTwo} />
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
        <p>
          Made with{" "}
          <a href="https://en.wikipedia.org/wiki/Anteater">&hearts;</a> in
          Irvine, CA
        </p>
      </section>
    </div>
  )
}

export default Home
