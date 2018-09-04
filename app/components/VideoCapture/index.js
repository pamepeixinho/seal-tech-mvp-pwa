import React from 'react';
import PropTypes from 'prop-types';
import Webcam from '@cliener/react-webcam';

const TIMEOUT = 1000;
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
      // uploadImage(imageSrc);
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
        {this.props.isActive ?
          <Webcam
            audio={false}
            ref={this.setRef}
            style={{ display: 'inline-block' }}
            screenshotFormat="image/jpeg"
            onUserMedia={this.loop}
            videoConstraints={videoConstraints}
          />
        :
          <div style={{ width: '100%', height: this.props.height, background: '#D8D8D8', display: 'inline-block' }} />
        }
      </React.Fragment>
    );
  }
}


VideoCapture.propTypes = {
  isActive: PropTypes.bool,
  height: PropTypes.number,
  uploadFrame: PropTypes.func,
  webcamAllowedCallback: PropTypes.func,
};

export default VideoCapture;
