import { UPDATE_GRADE, UPDATE_QUESTION_BY_TYPE } from './constants';

export const updateGrade = (value) => ({
  type: UPDATE_GRADE,
  value,
});

export const updateQuestion = (questionType, value) => ({
  type: UPDATE_QUESTION_BY_TYPE,
  questionType,
  value,
});

