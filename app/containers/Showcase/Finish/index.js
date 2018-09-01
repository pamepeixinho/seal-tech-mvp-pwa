/**
 *
 * Showcase
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import MuiPaper from '@material-ui/core/Paper';

import injectReducer from 'utils/injectReducer';
// import AppBar from 'components/AppBar';
import Logo from 'images/logo-sealtech.png';

import {
  selectWon,
} from '../Game/selector';
import reducer from '../Game/reducer';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  margin: 0 auto;
  padding: 32px;
  position: relative;
  top: 86px;
`;

const LogoImg = styled.img`
  width: 75%;
  margin: 0 auto;
  display: block;
`;

const ThanksSection = styled.div`
  margin: 32px auto;
  width: 60%;
  text-align: center;
`;

export class Finish extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <AppBar /> */}
        <Paper>
          <LogoImg src={Logo} alt="logo" />
          <ThanksSection>
            <h1 style={{ color: '#1ED0E3' }}>Thanks for participating of our showcase game!</h1>
            <h2>
              {this.props.hasWon ? 'You won' : 'You loose'}
            </h2>
            <h2 style={{ color: '#959595', fontWeight: 300, marginTop: 16 }}>
              Our objective here is to show a little of our work.
              Get in touch with us:
              <div style={{ marginTop: 16, color: '#959595 !important' }} >
                <a href="https://www.sealtech.io/"> https://www.sealtech.io/ </a>
                <br />
                <a href="https://twitter.com/Sealtech4you"> @Sealtech4you </a>
                <br />
                <a href="mailto:contact@sealtech.io"> contact@sealtech.io </a>
              </div>
            </h2>
          </ThanksSection>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hasWon: selectWon,
});

const withConnect = connect(mapStateToProps, null);

const withReducer = injectReducer(
  { key: 'showcase', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(Finish);
