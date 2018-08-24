import { push } from 'react-router-redux';

import { uploadAnswers } from 'api/trainning';

import {
  UPDATE_GRADE,
  UPDATE_QUESTION_BY_TYPE,
} from './constants';
import { CLEAR_STATE } from '../../constants';
import { selectGrade, makeSelectQuestions } from './selectors';

export const updateGrade = (value) => ({
  type: UPDATE_GRADE,
  value,
});

export const updateQuestion = (questionType, value) => ({
  type: UPDATE_QUESTION_BY_TYPE,
  questionType,
  value,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const uploadAndFinish = (id) => (dispatch, getState) => {
  const grade = Number(selectGrade(getState()));
  const questions = makeSelectQuestions()(getState());
  return uploadAnswers(id, { grade, ...questions }).then(() => {
    dispatch(clearState());
    dispatch(push('/treinamento'));
  });
};

