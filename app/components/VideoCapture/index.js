import React from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

import { uploadImage } from '../../api/backend';
import Video from '../Video';

const TIMEOUT = 5000;

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 640px;
  height: 390px;
  background: #F5F5F5;
`;

const Hidden = Wrapper.extend`
  z-index: 0;
`;

class VideoCapture extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    wip: true,
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  loop = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, TIMEOUT);
  }

  capture = () => {
    if (this.state.wip) {
      // console.log('test', n++);
      const imageSrc = this.webcam.getScreenshot();
      uploadImage(imageSrc);
    }
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <React.Fragment>
        <Hidden>
          <Webcam
            audio={false}
            height={390}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={640}
            onUserMedia={this.loop}
            videoConstraints={videoConstraints}
          />
        </Hidden>
        <Wrapper />
      </React.Fragment>
    );
  }
}

VideoCapture.propTypes = {
};

// const mapDispatchToProps = (dispatch) => ({
//   search: () => dispatch(search()),
// });

export default VideoCapture;
