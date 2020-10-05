import React from "react"
import "./Home.scss"
import { faqQuestions } from "assets/data/faq-questions"

import { Button } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"

import { FAQCollapse } from "app/containers"
import zothacksSucc from "assets/images/zothacksucc.png"
import bubbles from "assets/images/bubbles.png"
import mentorship from "assets/images/mentorship.png"
import butterflyOne from "assets/images/butterflyOne.png"
import butterflyTwo from "assets/images/butterflyTwo.png"
import sinWaveOne from "assets/images/white_sinewave_1.png"
import sinWaveTwo from "assets/images/white_sinewave_2.png"

function Home() {
  return (
    <div className="Home">
      <section id="intro">
        <div className="intro-wrapper">
          <div className="title-info">
            <Fade duration={1000} left>
              <div>
                <h1>ZotHacks</h1>
                {/* <h4>November 13-14th</h4> */}
                <h4>Date to be revealed!</h4>
                <a href="https://tinyurl.com/zothacks2019">
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
                  y: [-15, -15, -15]
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
        <img className="sin-wave sin-wave--one" src={sinWaveOne}/>
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
              providing technical workshops, strong mentorship, and free food!
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
              If you love the hackathon experience and would love to share it
              with new developers, apply to be a mentor!
            </p>
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
          </div>
        </div>
        <img className="mentors-butterfly --two" src={butterflyTwo} />
      </section>
      <section id="faq">
        <img className="sin-wave sin-wave--two" src={sinWaveTwo}/>
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
