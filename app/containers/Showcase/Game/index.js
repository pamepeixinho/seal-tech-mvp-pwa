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

import MuiPaper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import injectReducer from 'utils/injectReducer';
import AppBar from 'components/AppBar';
import DefaultWrapper from 'components/DefaultWrapper';
import VideoCapture from 'components/VideoCapture';

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
} from './actions';
import reducer from './reducer';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
};

const positions = [
  {
    bottom: '10%',
    right: '12%',
    color: 'rgb(210, 67, 137)',
  },
  {
    top: '5%',
    right: '31%',
    color: 'rgb(210, 67, 137)',
  },
  {
    right: '10%',
    top: '20%',
    color: 'rgb(48, 208, 225)',
  },
  {
    top: '12%',
    left: '10%',
    color: 'rgb(166, 230, 52)',
  },
  {
    top: '38%',
    left: '4%',
    color: 'rgb(210, 67, 137)',
  },
  {
    bottom: '25%',
    left: '15%',
    color: 'rgb(48, 208, 225)',
  },
  {
    bottom: '4%',
    right: '50%',
    color: 'rgb(114, 41, 173)',
  },
  {
    bottom: '40%',
    right: '20%',
    color: 'rgb(166, 230, 52)',
  },
];


const RandomPosition = styled.div`
  background: white;
  position: absolute;
  font-size: 20px;
  padding: 1px 5px;
`;

export class Showcase extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    progressCompleted: 0,
    victoryThreshold: 8.0,
    userWon: false,
  };

  componentWillMount() {
    this.suffle();
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 100);
    setInterval(this.suffle, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.suffle);
  }

  timer = null;

  suffle = () => {
    this.emotionPositions = shuffleArray(positions);
  }

  progress = () => {
    const { progressCompleted } = this.state;
    if (progressCompleted < 100) {
      this.setState({ progressCompleted: progressCompleted + 1 });
    }
  };

  render() {
    if (this.props.commitment >= 8) {
      this.setState({ userWon: true });
    }

    const message = this.state.userWon ? 'You won' : 'you lose';

    return (
      <div>
        <AppBar />
        <DefaultWrapper style={{ paddingTop: 65 }}>
          <div style={{ position: 'relative', margin: '64px 16px 16px' }}>
            <VideoCapture
              isActive={this.state.progressCompleted < 100}
              uploadFrame={this.props.uploadFrame}
              webcamAllowedCallback={() => {}}
              height={720}
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

          commitment: {this.props.commitment}

          {this.state.progressCompleted === 100 &&
            <Typography variant="display2" gutterBottom>
              {message}
            </Typography>
          }

          <LinearProgress variant="determinate" value={this.state.progressCompleted} />
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
};

const mapDispatchToProps = (dispatch, { match }) => ({
  uploadFrame: (imageSrc) => dispatch(uploadImageFrame(match.params.id, imageSrc)),
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
