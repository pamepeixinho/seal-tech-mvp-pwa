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

import { selectIsActiveClass } from './selectors';
import { toggleActiveClass } from './actions';
import reducer from './reducer';
import homePageReducer from '../HomePage/reducer';

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
            <VideoCapture isActive={this.props.isActiveClass} />
            <Button
              color="secondary"
              variant="raised"
              onClick={this.props.toggleActiveClass}
              style={{ marginTop: 32 }}
            >
              {this.props.isActiveClass ? 'Parar' : 'Começar'}
            </Button>
          </Paper>
        </div>
      </div>
    );
  }
}

StartClass.propTypes = {
  isActiveClass: PropTypes.bool.isRequired,
  toggleActiveClass: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isActiveClass: selectIsActiveClass,
});

const mapDispatchToProps = (dispatch) => ({
  toggleActiveClass: () => dispatch(toggleActiveClass()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'startClass', reducer },
  { key: 'homePage', homePageReducer },
);

export default compose(
  withReducer,
  withConnect,
)(StartClass);
