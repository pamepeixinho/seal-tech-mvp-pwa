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

const LogoImg = styled.img`
  width: 50%;
  margin: 0 auto;
  display: block;
`;

const ThanksSection = styled.div`
  margin: 32px auto;
  width: 60%;
  text-align: center;
`;

const Link = styled.a`
  color: #959595;

  :hover {
    color: #727272;
  }
`;

export class Finish extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  lostText = 'Unfortunately, you lost this game :(';
  wonText = 'You WON!! Call one of our co-founders to receive your candy :)';

  render() {
    return (
      <div style={{ height: '100%', paddingTop: '20%' }}>
        <a href="/showcase">
          <LogoImg src={Logo} alt="logo" />
        </a>
        <ThanksSection>
          <h1 style={{ color: '#1ED0E3', fontWeight: 300 }}>Thanks for playing!</h1>
          <h1 style={{ color: 'rgb(114, 41, 173)', margin: '124px 0', fontSize: 44 }}>
            {this.props.hasWon ? this.wonText : this.lostText}
          </h1>
          <h2 style={{ color: '#737373', fontWeight: 300, marginTop: 15 }}>
            {this.props.hasWon === false ? 'But do not get sad, our objective here is to show a little of our work. ' : null}
              <br />
              Get in touch with us:
              <div style={{ marginTop: 16 }} >
                <Link href="https://www.sealtech.io/"> https://www.sealtech.io/ </Link>
                <br />
                <Link href="https://twitter.com/Sealtech4you"> @Sealtech4you </Link>
                <br />
                <Link href="mailto:contact@sealtech.io"> contact@sealtech.io </Link>
              </div>
          </h2>
        </ThanksSection>
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
