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
import AppBar from 'components/AppBar';

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

export class Finish extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar />
        <Paper>
          <h1> {this.props.hasWon ? 'You won' : 'You loose'} </h1>
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
