import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Brightness1 from '@material-ui/icons/Brightness1';

import injectReducer from 'utils/injectReducer';
import DefaultWrapper from 'components/DefaultWrapper';
import AppBar from 'components/AppBar';

import reducer from './reducer';
import { selectGrade, makeSelectQuestions } from './selectors';
import { updateGrade, updateQuestion } from './actions';
import {
  OPEN_QUESTIONS_SUBJECT,
} from './constants';
import OpenQuestion from './OpenQuestion';

const Paper = styled(MuiPaper)`
  max-width: 690px;
  min-height: 440px;
  margin: 0 auto;
  padding: 32px;
`;

const Questions = styled.span`
  text-decoration: underline; 
`;

class FinishClass extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderCustomIcon = () => (
    <span style={{ marginRight: 16 }}>
      <Brightness1 />
    </span>
  )

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
              <Questions>Faça a provinha do curso e insira o resultado:</Questions>
              <form
                noValidate
                autoComplete="off"
                style={{ display: 'inline', marginLeft: '32px' }}
              >
                <TextField
                  id="grade"
                  label="Nota"
                  value={this.props.grade}
                  onChange={this.props.updateGrade}
                  margin="normal"
                />
              </form>
            </div>
            <div style={{ marginTop: 16 }}>
              <Questions>Responda as perguntas abaixo, colocando um valor entre 1 e 5</Questions>

              <p>Assunto</p>
              <ol>
                {Object.keys(OPEN_QUESTIONS_SUBJECT).map((subjectQuestionKey) => {
                  const subject = OPEN_QUESTIONS_SUBJECT[subjectQuestionKey];
                  return (
                    <OpenQuestion
                      question={subject.question}
                      keyName={subject.key}
                      value={this.props.openQuestions[subject.key]}
                      updateOpenQuestionByType={this.props.updateOpenQuestionByType}
                    />
                  );
                })}

              </ol>
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
  grade: PropTypes.number.isRequired,
  openQuestions: PropTypes.object.isRequired,
  updateGrade: PropTypes.func.isRequired,
  updateOpenQuestionByType: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  grade: selectGrade,
  openQuestions: makeSelectQuestions(),
});

const mapDispatchToProps = (dispatch) => ({
  updateGrade: (evt) => dispatch(updateGrade(evt.target.value)),
  updateOpenQuestionByType: (nextValue, prevValue, name) => dispatch(updateQuestion(name, nextValue)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'finishClass', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(FinishClass);
