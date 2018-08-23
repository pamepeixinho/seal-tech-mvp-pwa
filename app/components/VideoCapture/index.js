import React from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';

const TIMEOUT = 10000;
class VideoCapture extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    wip: true,
  }

  componentWillUnmount() {
    this.setState({ wip: false });
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
      this.props.uploadFrame(imageSrc);
      console.log(imageSrc);
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
      <div style={{ width: '100%', textAlign: 'center' }}>
        {this.props.isActive ?
          <Webcam
            audio={false}
            height={290}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            onUserMedia={this.loop}
            videoConstraints={videoConstraints}
            style={{ display: 'inline-block' }}
          />
          :
          <div style={{ width: '100%', height: 290, background: '#D8D8D8', display: 'inline-block' }} />
        }
      </div>
    );
  }
}

VideoCapture.propTypes = {
  isActive: PropTypes.bool,
  uploadFrame: PropTypes.func,
};

export default VideoCapture;
