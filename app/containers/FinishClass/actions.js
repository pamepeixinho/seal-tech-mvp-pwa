import { push } from 'react-router-redux';

import { uploadAnswers } from 'api/train';

import {
  UPDATE_GRADE,
  UPDATE_QUESTION_BY_TYPE,
  CLEAR_STATE,
} from './constants';
import { selectGrade } from './selectors';

export const updateGrade = (value) => ({
  type: UPDATE_GRADE,
  value,
});

export const updateQuestion = (questionType, value) => ({
  type: UPDATE_QUESTION_BY_TYPE,
  questionType,
  value,
});

export const uploadAndFinish = (id) => (dispatch, getState) => {
  const grade = Number(selectGrade(getState()));
  return uploadAnswers(id, { grade }).then(() => {
    dispatch(push('/'));
    dispatch();
  });
};

export const clearState = () => ({
  type: CLEAR_STATE,
});
