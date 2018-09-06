/**
 *
 * StartClass
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import injectReducer from 'utils/injectReducer';
import AppBar from 'components/AppBar';
import DefaultWrapper from 'components/DefaultWrapper';
import VideoCapture from 'components/VideoCapture';

import { selectIsActiveClass, selectIsWebcamAllowed } from './selectors';
import {
  toggleActiveClass,
  finishClass,
  uploadImageFrame,
  webcamAllowed,
} from './actions';
import reducer from './reducer';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  margin: 0 auto;
  padding: 32px;
`;

const ActionsSection = styled.div`
  text-align: center;
  margin-top: 32px;
`;

export class StartClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  startButtonInstruction = `When your video class is about to begin, press the "Start the class" button to start recording. 
  If you need to pause, just press "Pause the class"`
  allowWebCam = 'Click on "Allow" when your browser ask by a popup'
  finishButtonInstruction = 'After you finish your class, just press "Stop the class"'
  startButton = 'Start the class'
  pauseButton = 'Pause the class'
  stopButton = 'Stop the class'

  render() {
    return (
      <div>
        <AppBar />
        <DefaultWrapper>
          <Paper style={{ position: 'relative' }}>
            {!this.props.isActiveClass &&
              <React.Fragment>
                <h4 style={{ marginBottom: 8, marginTop: 0 }}>
                  Thank you for using our tool. To start the video you just need to follow these instructions:
                </h4>
                <ol>
                  <li>{this.startButtonInstruction}</li>
                  <li>{this.allowWebCam}</li>
                  <li>{this.finishButtonInstruction}</li>
                </ol>
              </React.Fragment>
            }
            { this.props.isActiveClass ?
              <VideoCapture
                isActive={this.props.isActiveClass}
                uploadFrame={this.props.uploadFrame}
                webcamAllowedCallback={this.props.triggerWebcamAllowed}
              /> : null}
            <ActionsSection>
              <Button
                color="secondary"
                variant="raised"
                onClick={this.props.toggleActiveClass}
              >
                {this.props.isActiveClass && this.props.isWebcamAllowed ? this.pauseButton : this.startButton}
              </Button>
              { this.props.isActiveClass && this.props.isWebcamAllowed &&
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={this.props.goToFinishPage}
                  style={{ marginLeft: 32 }}
                >
                  {this.stopButton}
                </Button>
              }
            </ActionsSection>
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

StartClass.propTypes = {
  isActiveClass: PropTypes.bool.isRequired,
  toggleActiveClass: PropTypes.func.isRequired,
  goToFinishPage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isActiveClass: selectIsActiveClass,
  isWebcamAllowed: selectIsWebcamAllowed,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  toggleActiveClass: () => dispatch(toggleActiveClass()),
  triggerWebcamAllowed: () => dispatch(webcamAllowed()),
  goToFinishPage: () => {
    dispatch(finishClass());
    dispatch(push(`/treinamento/finalizar-aula/${match.params.id}`));
  },
  uploadFrame: (imageSrc) => dispatch(uploadImageFrame(match.params.id, imageSrc)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'startClass', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(StartClass);
