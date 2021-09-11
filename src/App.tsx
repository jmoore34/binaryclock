import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

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

const Box = styled.div<{area: string}>`
  grid-area: ${props => props.area};
`;

function App() {
  return (
    <Grid>
    </Grid>
  );
}

export default App;
