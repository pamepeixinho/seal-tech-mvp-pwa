/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import MuiPaper from '@material-ui/core/Paper';

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
  render() {
    return (
      <div>
        <AppBar title="Showcase" />
        <DefaultWrapper>
          <Paper style={{ position: 'relative' }}>
            <VideoCapture
              isActive
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
            neutral: {this.props.neutral}
            <br />
            sadness: {this.props.sadness}
            <br />
            surprise: {this.props.surprise}
            <br />
            <br />
            commitment: {this.props.commitment}
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

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
