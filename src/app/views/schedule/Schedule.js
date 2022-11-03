import React from "react"
import "./Schedule.scss"

import { Footer } from "app/components"

import { scheduleData } from "../../../assets/data/schedule-data"
import Countdown from '../../components/countdown/Countdown'

function Schedule() {
  let hackingBegins = "5 Nov 2022 10:00:00 PDT"
  let devpostSubmission = "5 Nov 2022 22:00:00 PDT"

  function generateCountdown() {
    if (Date.parse(hackingBegins) - Date.now() > 0) {
      return (
        <section id="schedule-block">
          <div className="schedule-countdown text-center">
            <Countdown date={hackingBegins} />
          </div>
          <div className="schedule-countdown-text">
            <span> Until Hacking Begins</span>
          </div>
        </section>
      )
    } else {
      return (
        <section id="schedule-block">
          <div className="schedule-countdown text-center">
            <Countdown date={devpostSubmission} />
          </div>
          <div className="schedule-countdown-text">
            <span> Until Devpost Submission Closes</span>
          </div>
        </section>
      )
    }
  }

  return (
    <div className="Schedule">
      <div className="overlaying-div">
        {generateCountdown()}
      </div>

      <section id="schedule-cards">
        {scheduleData.map(function (schedule, i) {
          return (
            <div className="schedule-card" key={i}>
              <h3>{schedule.day}</h3>
              {schedule.events.map(function (event, j) {
                return (
                  <div className="schedule-card-event" key={event.name}>
                    <span className="left-text">{event.name}</span>
                    <span className="right-text">{event.time}</span>
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
      <Footer />
    </div>
  )
}

export default Schedule
