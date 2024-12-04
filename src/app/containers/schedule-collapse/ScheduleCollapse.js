import React, { useState } from "react"
import "./ScheduleCollapse.scss"

import { motion, AnimatePresence } from "framer-motion"
import triangle from "assets/images/triangle.svg"

function ScheduleCollapse({ name, time, description, link }) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="schedule-collapse">
      <div
        className="schedule-collapse-title"
        onClick={() => setIsOpened(!isOpened)}
      >
      {
        link ? (
          <h4>{name} | {<a href={link}>Zoom</a>}</h4>
        ) : <h4>{name}</h4>
        }
        <div className="schedule-collapse-right">
          <h4>{time}</h4>
          {!isOpened ? (
            <img style={{transform: "rotate(180deg)"}} src={triangle} alt="dropdown" onClick={() => setIsOpened(!isOpened)} />
          ) : (
              <img src={triangle} alt="dropdown" onClick={() => setIsOpened(!isOpened)} />
          )}
        </div>
      </div>
      <div className="description-wrapper">
        <AnimatePresence>
          {isOpened ? (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >
              <p>{description}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ScheduleCollapse
