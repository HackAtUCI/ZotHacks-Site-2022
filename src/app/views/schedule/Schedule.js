import React from "react"
import "./Schedule.scss"

import { scheduleData } from "../../../assets/data/schedule-data"
import Countdown from "react-countdown"
import pixels from "../../../assets/images/pixels.svg"

function Schedule() {
  let hackingBegins = "05 Nov 2021 21:00:00 PST"
  let devpostSubmission = "07 Nov 2021 10:00:00 PST"

  function generateCountdown() {
    if (Date.parse(hackingBegins) - Date.now() > 0) {
      return (
        <section id="schedule-block">
          <div className="schedule-countdown">
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
          <div className="schedule-countdown">
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
        <div className="schedule-pixels">
          <img src={pixels} alt="pixels" />
        </div>
      </div>

      <section id="schedule-cards">
        {scheduleData.map(function (schedule, i) {
          return (
            <div className="schedule-card" key={i}>
              <h3>{schedule.day}</h3>
              {schedule.events.map(function (event, j) {
                return (
                  <div className="schedule-card-event">
                    <span className="left-text">{event.name}</span>
                    <span className="right-text">{event.time}</span>
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Schedule
