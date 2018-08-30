import React from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';

const TIMEOUT = 1000;
class VideoCapture extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    wip: false,
  }

  componentWillUnmount() {
    this.setState({ wip: false });
    clearInterval(this.interval);
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  loop = () => {
    this.setState({ wip: true });
    this.props.webcamAllowedCallback();
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
      height: 840,
      width: 704,
      facingMode: 'user',
    };

    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        {this.props.isActive ?
          <Webcam
            audio={false}
            height={this.props.height}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            onUserMedia={this.loop}
            style={{ display: 'inline-block' }}
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
