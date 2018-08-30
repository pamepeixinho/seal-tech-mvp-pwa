/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MuiButton from '@material-ui/core/Button';

import EmotionsGif from 'images/emotions.gif';
import AppBar from 'components/AppBar';

const Img = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  padding: 100px 128px 0;
  max-width: 1024px;
`;

const Button = styled(MuiButton)`
  display: block;
  margin: auto;
  margin-top: 60px;
`;

export class Landing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <Img src={EmotionsGif} alt="emotions gif" />
        <Link to="/showcase/game">
          <Button color="secondary" variant="raised">
            START
          </Button>
        </Link>
      </div>
    );
  }
}

export default Landing;
