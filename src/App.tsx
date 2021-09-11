import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { getDigits, useTime } from './util';

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    ". .   .   .  .   .  ."
    ". d16 d8  d4 d2  d1 ."
    ". h8  mm8 m8 ss8 s8 ."
    ". h4  mm4 m4 ss4 s4 ."
    ". h2  mm2 m2 ss2 s2 ."
    ". h1  mm1 m1 ss1 s1 ."
    ". .   .   .  .   .  .";
  grid-template-columns: 1fr repeat(5, 18vmin) 1fr;
  grid-template-rows: 1fr repeat(5, 18vmin) 1fr;
  width: 100vw;
  height: 100vh;
`;

enum BoxVariant {
  Date = "purple",
  Second = "red",
  Minute = "green",
  Hour = "blue"
}

const Box = styled.div<{area: string, variant: BoxVariant, active: boolean | number}>`
  grid-area: ${props => props.area};
  background-color: ${props => props.variant};
  opacity: ${props => props.active ? 0.9 : 0.3};
`;

function App() {
  const now = useTime();

  const d = now.getDate()
  var h = now.getHours() % 12;
  if (h === 0)
    h = 12;
  const [mm, m] = getDigits(now.getMinutes());
  const [ss, s] = getDigits(now.getSeconds());

  return (
    <Grid>
      {[1,2,4,8].map(i => <>
        <Box variant={BoxVariant.Date} area={`d${i}`} active={d & i} />
        <Box variant={BoxVariant.Hour} area={`h${i}`} active={h & i} />
        <Box variant={BoxVariant.Minute} area={`m${i}`} active={m & i} />
        <Box variant={BoxVariant.Minute} area={`mm${i}`} active={mm & i} />
        <Box variant={BoxVariant.Second} area={`s${i}`} active={s & i} />
        <Box variant={BoxVariant.Second} area={`ss${i}`} active={ss & i} />
      </>)}
      {/* date also has 16 bit box */}
      <Box variant={BoxVariant.Date} area="d16" active={d & 16} />
    </Grid>
  );
}

export default App;
