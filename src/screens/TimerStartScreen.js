
import React from 'react'
import styled from 'styled-components'
import Button from '../styles'

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E23D28;
  color: white;
  font-size: 1rem;
  padding: 4rem 4rem;
`

const Input = styled.input`
  min-height: 100px;
  font-size: 1rem;
  line-height: 1.5;
  min-height: 3rem;
  max-height: 3rem;
  outline: 0px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`

const Inputs = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  & p, input {
    margin-right: 1rem;
  }
`

const TimerStartScreen = ({ updatedCountdown, startTimer, minutes, seconds }) => {
  return (
    <TimerContainer>
      <Inputs>
        <>
          <Input
            onChange={updatedCountdown}
            label="Minutes"
            type="number"
            value={minutes}
            name="minutes"
            max={59}
            min={0}
          />
          <p> Minutes </p>
        </>
        <>
          <Input
            onChange={updatedCountdown}
            label="Seconds"
            type="number"
            value={seconds}
            name="seconds"
            max={59}
            min={0}
          />
          <p> Seconds </p>
        </>
      </Inputs>
      <Button 
        disabled={minutes === 0 && seconds === 0}
        onClick={startTimer}
      > 
       Press here to start
      </Button>
    </TimerContainer>
  )
}

export default TimerStartScreen