// Absolute imports
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Local imports
import CountdownScreen from './screens/CountdownScreen'
import TimerStartScreen from './screens/TimerStartScreen'

// Utils
import { formatTime, convertMinutesToSeconds } from './utils/time'

const Container = styled.div`
  & h1 {
    font-size: 1rem;
    text-align: center;
  }
`

const Timer = () => {

const [activeCountdown, startCountdown] = useState(0)

const [countdown, updateCountdown] = useState({ minutes: 0, seconds: 0})

// Triggering timer to start
const startTimer = () => {
  let mins = 0
  // converting mins to seconds if available
  if (countdown.minutes) {
    mins = convertMinutesToSeconds(countdown.minutes)
  }
  const totalSeconds = parseInt(countdown.seconds) + mins
  // triggering activeCountdown
  startCountdown(totalSeconds)
}

// Updating countdown minutes and seconds when input changes
const updatedCountdown = (e) => {
  const { name, value } = e.target;
  // Allow update to happen if the values are in the correct range
  if ((value < 60 && value >= 0 && value.length <= 2)) {
    // Countdown inputs for minutes and seconds
    updateCountdown(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
}; 

// Listening for activecountdown to update countdown
  useEffect(() => {
    if (activeCountdown > 0) {
      const timer = setInterval(() => startCountdown(activeCountdown - 1), 1000);
      return () => {
        clearInterval(timer)
      };
    }
  }, [activeCountdown]);

  // Resetting the timer
  const stopTimer = () => {
    startCountdown(0)
    updateCountdown({ minutes: 0, seconds: 0 })
  }

  return (
    <Container>
      <h1> Timer </h1>
      {activeCountdown > 0 ?
        <CountdownScreen
          stopTimer={stopTimer}
          time={formatTime(activeCountdown)}
        />
      :
        <TimerStartScreen
          startTimer={startTimer}
          updatedCountdown={updatedCountdown}
          minutes={countdown.minutes}
          seconds={countdown.seconds}
      />
      }
   </Container>
  )
}

export default Timer