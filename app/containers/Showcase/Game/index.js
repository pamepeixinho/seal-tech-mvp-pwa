/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

import injectReducer from 'utils/injectReducer';
// import AppBar from 'components/AppBar';
import DefaultWrapper from 'components/DefaultWrapper';
import VideoCapture from 'components/VideoCapture';
import Shield from 'images/shield.svg';
import Seal from 'assets/images/progressbar_foca cheia.svg';
import EmptySeal from 'assets/images/progressbar_foca vazia.svg';

import {
  selectAnger,
  selectContempt,
  selectDisgust,
  selectFear,
  selectHappiness,
  selectNeutral,
  selectSadness,
  selectSurprise,
  selectCommitment,
} from './selector';
import {
  uploadImageFrame,
  setUserResult,
} from './actions';
import reducer from './reducer';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
};

const randomPosition = (initialPosition) => `${initialPosition + (Math.random() * 3)}%`;

const positions = () => [
  {
    bottom: randomPosition(10),
    right: randomPosition(12),
    color: 'rgb(210, 67, 137)',
  },
  {
    top: randomPosition(5),
    right: randomPosition(31),
    color: 'rgb(210, 67, 137)',
  },
  {
    right: randomPosition(10),
    top: randomPosition(20),
    color: 'rgb(48, 208, 225)',
  },
  {
    top: randomPosition(12),
    left: randomPosition(10),
    color: 'rgb(166, 230, 52)',
  },
  {
    top: randomPosition(38),
    left: randomPosition(10),
    color: 'rgb(210, 67, 137)',
  },
  {
    bottom: randomPosition(25),
    left: randomPosition(15),
    color: 'rgb(48, 208, 225)',
  },
  {
    bottom: randomPosition(4),
    right: randomPosition(50),
    color: 'rgb(114, 41, 173)',
  },
  {
    bottom: randomPosition(40),
    right: randomPosition(15),
    color: 'rgb(166, 230, 52)',
  },
];


const RandomPosition = styled.div`
  background: white;
  position: absolute;
  font-size: 20px;
  padding: 1px 5px;
`;

const SealWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
`;

const SealIcon = styled.img`
  justify-content: center;
  margin-right: 0;
  filter: FlipH;
  height: 72px;
`;

const CountdownNumber = styled.span`
  position: absolute;
  font-size: 24px;
  top: 29%;
  left: 46%;
  color: white;
  text-align: center;
  width: 60px;
`;

export class Showcase extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    countdown: 10,
    victoryThreshold: 8.0,
    userWon: false,
  };

  componentWillMount() {
    this.suffle();
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
    setInterval(this.suffle, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.suffle);
  }

  timer = null;

  suffle = () => {
    this.emotionPositions = shuffleArray(positions());
  }

  hasUserWon = () => this.props.commitment > 8

  sealMeUp = (index) => this.props.commitment > index * 2 ? Seal : EmptySeal;

  progress = () => {
    const { countdown } = this.state;

    if (this.hasUserWon()) {
      this.setState({
        hasUserWon: true,
      });
    }

    if (countdown === 0) {
      this.props.goToFinishPage(this.state.hasUserWon);
      return;
    }

    this.setState({ countdown: countdown - 1 });
  };

  render() {
    return (
      <div style={{ maxWidth: 1024, margin: 'auto' }}>
        {/* <AppBar /> */}
        <DefaultWrapper style={{ paddingTop: 0, margin: 'auto' }}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={Shield} alt="shield" style={{ width: '110px', display: 'block', margin: '0 auto' }} />
            <CountdownNumber> {this.state.countdown} </CountdownNumber>
          </div>
          <div style={{ position: 'relative', margin: '0 auto', maxWidth: 690 }}>
            <VideoCapture
              isActive={this.state.countdown < 100}
              uploadFrame={this.props.uploadFrame}
              webcamAllowedCallback={() => {}}
            />
            <RandomPosition style={this.emotionPositions[0]}>
              anger: {this.props.anger}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[1]}>
              contempt: {this.props.contempt}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[2]}>
              disgust: {this.props.disgust}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[3]}>
              fear: {this.props.fear}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[4]}>
              happiness: {this.props.happiness}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[5]}>
              neutral: {this.props.neutral}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[6]}>
              sadness: {this.props.sadness}
            </RandomPosition>
            <RandomPosition style={this.emotionPositions[7]}>
              surprise: {this.props.surprise}
            </RandomPosition>
          </div>
          <h3 style={{ textAlign: 'center', color: 'rgb(210, 67, 137)' }} >Commitment seal</h3>
          <SealWrapper>
            <SealIcon src={this.sealMeUp(1)} role={'presentation'} />
            <SealIcon src={this.sealMeUp(2)} role={'presentation'} />
            <SealIcon src={this.sealMeUp(3)} role={'presentation'} />
            <SealIcon src={this.sealMeUp(4)} role={'presentation'} />
            <SealIcon src={this.sealMeUp(5)} role={'presentation'} />
          </SealWrapper>
        </DefaultWrapper>
      </div>
    );
  }
}

Showcase.propTypes = {
  uploadFrame: PropTypes.func,
  anger: PropTypes.number,
  contempt: PropTypes.number,
  disgust: PropTypes.number,
  fear: PropTypes.number,
  happiness: PropTypes.number,
  neutral: PropTypes.number,
  sadness: PropTypes.number,
  surprise: PropTypes.number,
  commitment: PropTypes.number,
  goToFinishPage: PropTypes.func,
};

const mapDispatchToProps = (dispatch, { match }) => ({
  uploadFrame: (imageSrc) => dispatch(uploadImageFrame(match.params.id, imageSrc)),
  goToFinishPage: (userHasWon) => {
    dispatch(setUserResult(userHasWon));
    dispatch(push('/showcase/finish'));
  },
});

const mapStateToProps = createStructuredSelector({
  anger: selectAnger,
  contempt: selectContempt,
  disgust: selectDisgust,
  fear: selectFear,
  happiness: selectHappiness,
  neutral: selectNeutral,
  sadness: selectSadness,
  surprise: selectSurprise,
  commitment: selectCommitment,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'showcase', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(Showcase);
