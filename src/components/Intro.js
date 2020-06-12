import React from 'react';
import styled from '@emotion/styled'

const Intro = styled.div`
  padding-top: 32px;
  text-align: center;

  @media screen and (min-width: 1280px) {
    padding-top: 64px;
  }

  .intro-title {
    font-family: var(--font-heading);
    margin: 0;
    text-transform: uppercase;
  }
`


export default () => 
  <Intro>
    <h1 className="intro-title">
      Questo non è altro che un viaggio fatto di foto,<br/> guarda tutte le località da me visitate.
    </h1>
  </Intro>