/**
 *
 * StartClass
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import injectReducer from 'utils/injectReducer';
import AppBar from 'components/AppBar';
import VideoCapture from 'components/VideoCapture';

// import makeSelectStartClass from './selectors';
import reducer from './reducer';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 440px;
  margin: 0 auto;
  padding: 32px;
`;

export class StartClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar title="Teste com Usuário" />
        <div style={{ paddingTop: 116 }}>
          <Paper style={{ position: 'relative', textAlign: 'center' }}>
            <VideoCapture />
            <Button
              color="secondary"
              variant="raised"
              onClick={this.props.toggleActiveClass}
              style={{ marginTop: 32 }}
            >
              Começar
            </Button>
          </Paper>
        </div>
      </div>
    );
  }
}

StartClass.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // startclass: makeSelectStartClass(),
});

const mapDispatchToProps = (dispatch) => ({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'startClass', reducer });

export default compose(
  withReducer,
  withConnect,
)(StartClass);
