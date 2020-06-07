import React from 'react';
import styled from 'styled-components'
import Button from '../styles'

const Container = styled.div`
  text-align: center;
  & p {
    font-size: 1rem;
  }
`
const CountdownScreen = ({ time, stopTimer }) => {
  return (
    <Container>
      <p>{time}</p>
      <Button onClick={stopTimer}> Stop timer </Button>
    </Container>
  );
}

export default CountdownScreen;
