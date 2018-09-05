/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';

import EmotionsGif from 'images/emotions-optimized.gif';
import AppBar from 'components/AppBar';
import StartIconButton from './StartIconButton';

const Img = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  padding: 50px 64px 0;
  max-width: 1024px;
`;

export class Landing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Img src={EmotionsGif} alt="emotions gif" />
        <StartIconButton />
      </React.Fragment>
    );
  }
}

export default Landing;
