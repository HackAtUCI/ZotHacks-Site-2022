import React from "react"
import { Link } from "react-router-dom";
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
import mentorButton from "assets/images/mentorButton.png";
import zothacksLogo from "assets/images/zothacks_logo_rya 2.svg"

import mtxLogo from "assets/images/sponsors/mtx_logo.png";
import guayakiLogo from "assets/images/sponsors/guayaki.png";

const APPLICATION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdPhGwP7KUTcIa6rWsPlyCswlykZwR-dXCJo78Gxahy0Q3sTA/viewform";

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
                                <h4>November 20-21, 2021</h4>
                                <Link
                                    className="apply-button-wrapper"
                                    to={{ pathname: APPLICATION_URL, }}
                                    target="_blank"
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
                                </Link>
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
                            minimal computer science experience will learn to build
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
                            <h2>Interested in <br/> becoming a mentor?</h2>
                            <p className="">
                                Have hackathon experience and would love to share it with new
                                developers? Apply to be a mentor for ZotHacks 2021!
                            </p>
                            <Link
                                className="apply-button-wrapper"
                                to={{ pathname: "https://airtable.com/shrbPw3zLgnVZkMkA" }}
                                target="_blank"
                                data-place="bottom"
                                data-tip="Make sure to use your UCI email!"
                            >
                                <img
                                    type="image"
                                    className="apply-button"
                                    style={{
                                        height: "70px",
                                        width: "auto",
                                        marginTop: "0.5rem",
                                    }}
                                    src={mentorButton}
                                >
                                </img>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <img className="mentors-butterfly --two" src={planetTwo} />
            </section>
            <section id="sponsors">
                <img className="banner ticket-banner" src={ticketBanner} />
                <div className="card">
                    <Fade duration={1000}>
                        <h2>Thank You to our Sponsors!</h2>
                        <div className="sponsor-logo-wrapper">
                            <div>
                                <a href="https://mtx.gg" target="_blank">
                                    <img className="sponsor-one" src={mtxLogo} alt="mtx logo"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://guayaki.com/" target="_blank">
                                    <img className="sponsor-two" src={guayakiLogo} alt="guayaki logo"/>
                                </a>
                            </div>
                        </div>
                        {/*<h3 className="sponsor-tier">Gold</h3>*/}
                        {/*<div className="sponsor-logo-wrapper">*/}
                        {/*    <img src={zothacksLogo}></img>*/}
                        {/*    <img src={zothacksLogo}></img>*/}
                        {/*    <img src={zothacksLogo}></img>*/}
                        {/*</div>*/}
                        {/*<h3 className="sponsor-tier">Silver</h3>*/}
                        {/*<div className="sponsor-logo-wrapper">*/}
                        {/*    <img src={zothacksLogo}></img>*/}
                        {/*    <img src={zothacksLogo}></img>*/}
                        {/*</div>*/}
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