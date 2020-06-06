import React from 'react';
import styled from 'styled-components'
import Button from '../styles'

const TimingCount = styled.p`
  font-size: 4rem;
`
const CountdownScreen = ({ time, stopTimer }) => {
  return (
    <div>
      <TimingCount>{time}</TimingCount>
      <Button onClick={stopTimer}> Stop timer </Button>
    </div>
  );
}

export default CountdownScreen;
