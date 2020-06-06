import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import Button from './styles'
import Timingscreen from './Timingscreen'

const Timer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E23D28;
  color: white;
  font-size: 3rem;
  padding: 1rem 1rem;
`



const Input = styled.input`
  min-height: 100px;
  font-size: 4rem;
`

const Inputs = styled.div`
  display: flex;
  padding-bottom: 2rem;
  & p, input {
    margin-right: 1rem;
  }
`

function App() {

  const [countdown, updateCountdown] = useState({ minutes: 0, seconds: 0})

  const [currentCountdown, startCountdown] = useState(0)

  const [isTimerBlocked, blockTimer] = useState(false)

  const updatedCountdown = (e) => {
    // Only allow for numbers 0 to 9
    const numbersRegex = "^[0-9^$]+$"
    const { name, value } = e.target;
    // Allow update to happen if the string is empty, the values are in the correct range and they match the correct regex
    if (value === ''  || (value < 60 && value >= 0 && value.match(numbersRegex) && value.length <= 2)) {
      updateCountdown(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };  

  const startTimer = () => {
    let mins = 0
    if (countdown.minutes) {
      mins = parseInt(countdown.minutes) * 60 
    }
    const secs = parseInt(countdown.seconds) + mins
    startCountdown(secs)
    blockTimer(true)
  }


  useEffect(() => {
    if (currentCountdown > 0) {
      const timer =
      currentCountdown > 0 && setInterval(() => startCountdown(currentCountdown - 1), 1000);
      return () => {
        clearInterval(timer)
        blockTimer(false)
      };
    }
  }, [currentCountdown]);

  const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds - minutes * 60;
    if (seconds < 60) {
      return `0:${seconds}`
    } else if (seconds > 60) {
      return `${minutes}:${remainingSeconds}`
    } else {
      return '0:00'
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer: </h1>
      </header>
      <body>
      {currentCountdown > 0 ?
      <Timingscreen
        stopTimer={() => startCountdown(0)}
        time={convertSecondsToMinutes(currentCountdown)}
        />
          :
            <Timer>
            <Inputs>
            <>
            <p> Minutes </p>
            <Input
            onChange={updatedCountdown}
            label="Minutes"
            type="number"
            value={countdown.minutes}
            name="minutes"
            disabled={isTimerBlocked}
            max={59}
            min={0}
          />
          </>
          <>
            <p> Seconds </p>
            <Input
            onChange={updatedCountdown}
            label="Seconds"
            type="number"
            value={countdown.seconds}
            name="seconds"
            disabled={isTimerBlocked}
            max={59}
            min={0}
          />
          </>
          </Inputs>
            <Button onClick={startTimer}> Press here to start</Button>
         </Timer>

      }
 
      </body>
    </div>
  );
}

export default App;
