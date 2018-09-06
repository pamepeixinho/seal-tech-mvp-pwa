import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

import MuiPaper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Brightness1 from '@material-ui/icons/Brightness1';

import injectReducer from 'utils/injectReducer';
import DefaultWrapper from 'components/DefaultWrapper';
import AppBar from 'components/AppBar';

import reducer from './reducer';
import { selectGrade, makeSelectQuestions, makeShouldButtonBeEnabled } from './selectors';
import { updateGrade, updateQuestion, uploadAndFinish } from './actions';
import SubjectQuestion from './SubjectQuestion';
import {
  OPEN_QUESTIONS_SUBJECT,
  OPEN_QUESTIONS_RYTHM,
  OPEN_QUESTIONS_DIDACTICS,
  OPEN_QUESTIONS_COMMITMENT,
} from './constants';

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
  thanksText = 'Thank you for participating. Answer our last questions to finish this test:'
  explanation = 'Use 1 to 5 scale to answer these questions, where 5 means "I totally agree" and 1 means "I totally disagree"'

  renderCustomIcon = () => (
    <span style={{ marginRight: 16 }}>
      <Brightness1 />
    </span>
  )

  render() {
    return (
      <div>
        <AppBar />
        <DefaultWrapper>
          <Paper>
            <h4 style={{ marginBottom: 8 }}>{this.thanksText} </h4>
            <div style={{ marginTop: 16 }}>
              <Questions>{this.explanation}</Questions>
              <SubjectQuestion
                title="Content"
                openQuestionType={OPEN_QUESTIONS_SUBJECT}
                openQuestions={this.props.openQuestions}
                updateOpenQuestionByType={this.props.updateOpenQuestionByType}
              />
              <SubjectQuestion
                title="Commitment"
                openQuestionType={OPEN_QUESTIONS_COMMITMENT}
                openQuestions={this.props.openQuestions}
                updateOpenQuestionByType={this.props.updateOpenQuestionByType}
              />
              <SubjectQuestion
                title="Rythm"
                openQuestionType={OPEN_QUESTIONS_RYTHM}
                openQuestions={this.props.openQuestions}
                updateOpenQuestionByType={this.props.updateOpenQuestionByType}
              />
              <SubjectQuestion
                title="Didactics"
                openQuestionType={OPEN_QUESTIONS_DIDACTICS}
                openQuestions={this.props.openQuestions}
                updateOpenQuestionByType={this.props.updateOpenQuestionByType}
              />
            </div>
            <div style={{ textAlign: 'right', marginTop: 32 }}>
              <Button
                color="secondary"
                variant="raised"
                style={{ display: 'inline-block' }}
                onClick={this.props.finish}
                disabled={!this.props.buttonEnabled}
              >
                Finish
              </Button>
            </div>
          </Paper>
        </DefaultWrapper>
      </div>
    );
  }
}

FinishClass.propTypes = {
  openQuestions: PropTypes.object.isRequired,
  finish: PropTypes.func,
  updateOpenQuestionByType: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  grade: selectGrade,
  openQuestions: makeSelectQuestions(),
  buttonEnabled: makeShouldButtonBeEnabled(),
});

const mapDispatchToProps = (dispatch, { match }) => ({
  updateGrade: (evt) => dispatch(updateGrade(evt.target.value)),
  updateOpenQuestionByType: (nextValue, prevValue, name) => dispatch(updateQuestion(name, nextValue)),
  finish: () => dispatch(uploadAndFinish(match.params.id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'finishClass', reducer },
);

export default compose(
  withReducer,
  withConnect,
)(FinishClass);
