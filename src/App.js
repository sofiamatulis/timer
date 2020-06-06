import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';

const Timer = styled.div`
  background-color: pink;
`

function App() {

  const [countdown, updateCountdown] = useState({ minutes: 0, seconds: 0})

  const [currentCountdown, startCountdown] = useState()

  const [isTimerBlocked, blockTimer] = useState(false)

  const updatedCountdown = (e) => {
    const { name, value } = e.target;
    updateCountdown(prevState => ({
      ...prevState,
      [name]: value
    }));
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
       <Timer>
          <p> Start your timer: </p>
          <p> Minutes </p>
          <input
          onChange={updatedCountdown}
          label="Minutes"
          type="number"
          value={countdown.minutes}
          name="minutes"
          disabled={isTimerBlocked}
          max={60}
        />
          <p> Seconds </p>
          <input
          onChange={updatedCountdown}
          label="Seconds"
          type="number"
          value={countdown.seconds}
          name="seconds"
          disabled={isTimerBlocked}
          max={60}
        />
          <button onClick={startTimer}> Press here to start</button>
          <p> Time: {convertSecondsToMinutes(currentCountdown)} </p>
       </Timer>
      </header>
    </div>
  );
}

export default App;
