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
import { push } from 'react-router-redux';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import injectReducer from 'utils/injectReducer';
import AppBar from 'components/AppBar';
import DefaultWrapper from 'components/DefaultWrapper';
import VideoCapture from 'components/VideoCapture';

import { selectIsActiveClass } from './selectors';
import {
  toggleActiveClass,
  finishClass,
  uploadImageFrame,
} from './actions';
import reducer from './reducer';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 440px;
  margin: 0 auto;
  padding: 32px;
`;

const ActionsSection = styled.div`
  text-align: center;
  margin-top: 32px;
`;

export class StartClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar title="Teste com Usuário" />
        <DefaultWrapper>
          <Paper style={{ position: 'relative' }}>
            <h4 style={{ marginBottom: 8 }}>
              Muito Obrigado por concordar em participar do teste!
              Para começar pedimos para seguir as instruções abaixo:
            </h4>
            <ol>
              <li>
                Quando estiver com a video aula prestes a começar, pressione o botão para começar a
                 gravação (Se precisar pausar, pressione "Pausar a gravação")
              </li>
              <li>
                Para finalizar a gravação após acabar a video aula, pressione "Finalizar aula"
              </li>
            </ol>
            <VideoCapture isActive={this.props.isActiveClass} uploadFrame={this.props.uploadFrame} />
            <ActionsSection>
              <Button
                color="secondary"
                variant="raised"
                onClick={this.props.toggleActiveClass}
              >
                {this.props.isActiveClass ? 'Pausar a gravação' : 'Começar a gravação'}
              </Button>
              { this.props.isActiveClass &&
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={this.props.goToFinishPage}
                  style={{ marginLeft: 32 }}
                >
                  Finalizar aula
                </Button>
              }
            </ActionsSection>
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

StartClass.propTypes = {
  isActiveClass: PropTypes.bool.isRequired,
  toggleActiveClass: PropTypes.func.isRequired,
  goToFinishPage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isActiveClass: selectIsActiveClass,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  toggleActiveClass: () => dispatch(toggleActiveClass()),
  goToFinishPage: () => {
    dispatch(finishClass());
    dispatch(push(`/finalizar-aula/${match.params.id}`));
  },
  uploadFrame: (imageSrc) => dispatch(uploadImageFrame(match.params.id, imageSrc)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'startClass', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(StartClass);
