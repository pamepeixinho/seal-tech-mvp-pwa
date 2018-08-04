import React from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

import { uploadImage } from '../../api/backend';

const TIMEOUT = 5000;

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 640px;
  height: 390px;
  background: #fff;
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
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Webcam
          audio={false}
          height={290}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={540}
          onUserMedia={this.loop}
          videoConstraints={videoConstraints}
          style={{ display: 'inline-block' }}
        />
      </div>
    );
  }
}

VideoCapture.propTypes = {
};

// const mapDispatchToProps = (dispatch) => ({
//   search: () => dispatch(search()),
// });

export default VideoCapture;
