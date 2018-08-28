/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import EmotionsGif from 'images/emotions.gif';

import AppBar from 'components/AppBar';

const Img = styled.img`
  width: 90%;
`;


export class Finish extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <Img src={EmotionsGif} alt="emotions gif" />
      </div>
    );
  }
}

export default Finish;
