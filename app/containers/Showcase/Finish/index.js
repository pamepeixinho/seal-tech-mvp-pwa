/**
 *
 * Showcase
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import AppBar from 'components/AppBar';

import {
  selectWon,
} from '../Game/selector';
import reducer from '../Game/reducer';

export class Finish extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <div style={{ marginTop: 68 }}> {this.props.hasWon ? 'You won' : 'You loose'} </div>
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
