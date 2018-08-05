import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import injectReducer from 'utils/injectReducer';
import DefaultWrapper from 'components/DefaultWrapper';
import AppBar from 'components/AppBar';

import reducer from './reducer';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 440px;
  margin: 0 auto;
  padding: 32px;
`;

class FinishClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar title="Teste com Usuário" />
        <DefaultWrapper>
          <Paper>
            <h4 style={{ marginBottom: 8 }}>
              Muito Obrigado por participar do teste até o final!
              Falta pouquinho para acabar! Responda as últimas perguntas
              e pressione o botão "Finalizar".
            </h4>
            <div style={{ marginTop: 16 }}>
              <span style={{ textDecoration: 'underline' }} >Faça a provinha do curso e insira o resultado:</span>
              <form noValidate autoComplete="off">

              </form>
            </div>
            <Button
              color="secondary"
              variant="raised"
              onClick={() => {}}
            >
              Finalizar
            </Button>
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

FinishClass.propTypes = {
};

const withReducer = injectReducer(
  { key: 'finishClass', reducer },
);

export default compose(
  withReducer,
  connect(null, null)
)(FinishClass);
