/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MuiButton from '@material-ui/core/Button';
import StartButton from 'assets/images/botao_normal.svg';


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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonIcon = styled.img`
  justify-content: center;
  margin-right: 0;
  filter: FlipH;
  height: 72px;
`;

export class Landing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <Img src={EmotionsGif} alt="emotions gif" />
        <Link to="/showcase/game">
          {/* <Button color="secondary" variant="raised">
            START
          </Button> */}
          <ButtonWrapper>
            <ButtonIcon src={StartButton} />
          </ButtonWrapper>
        </Link>
      </div>
    );
  }
}

export default Landing;
