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

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 440px;
  margin: 0 auto;
  padding: 32px;
`;

export class Showcase extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    progressCompleted: 0,
    victoryThreshold: 8.0,
    userWon: false,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer = null;

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
        <AppBar title="Showcase" />
        <DefaultWrapper>
          <Paper style={{ position: 'relative' }}>
            <VideoCapture
              isActive={this.state.progressCompleted < 100}
              uploadFrame={this.props.uploadFrame}
              webcamAllowedCallback={() => {}}
            />
            anger: {this.props.anger}
            <br />
            contempt: {this.props.contempt}
            <br />
            disgust: {this.props.disgust}
            <br />
            fear: {this.props.fear}
            <br />
            happiness: {this.props.happiness}
            <br />
            neutral: {this.props.neutral}
            <br />
            sadness: {this.props.sadness}
            <br />
            surprise: {this.props.surprise}
            <br />
            <br />
            commitment: {this.props.commitment}

            {this.state.progressCompleted === 100 &&
              <Typography variant="display2" gutterBottom>
                {message}
              </Typography>
            }

            <LinearProgress variant="determinate" value={this.state.progressCompleted} />
          </Paper>
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
