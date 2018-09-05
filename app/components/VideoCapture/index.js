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
      const imageSrc = this.webcam.getScreenshot();
      this.props.uploadFrame(imageSrc);
    }
  };

  render() {
    const videoConstraints = {
      video: {
        width: 1280,
        height: 1280,
        facingMode: 'user',
      },
      audio: false,
    };

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        {this.props.isActive ?
          <Webcam
            audio={false}
            ref={this.setRef}
            style={{ display: 'inline-block', height: 720, width: '100%' }}
            screenshotFormat="image/jpeg"
            onUserMedia={this.loop}
            videoConstraints={videoConstraints}
          />
        :
          <div style={{ width: '100%', height: this.props.height, background: '#D8D8D8', display: 'inline-block' }} />
        }
      </div>
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
