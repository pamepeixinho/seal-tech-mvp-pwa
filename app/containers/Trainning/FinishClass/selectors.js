import { createSelector } from 'reselect';

import {
  OPEN_QUESTIONS_SUBJECT,
  OPEN_QUESTIONS_RYTHM,
  OPEN_QUESTIONS_DIDACTICS,
  OPEN_QUESTIONS_COMMITMENT,
} from './constants';

export const selectFinishClassDomain = (state) => state.get('finishClass');

export const selectGrade = (state) => selectFinishClassDomain(state).get('grade');

export const makeSelectQuestions = () => createSelector(
  selectFinishClassDomain,
  (state) => state.get('openQuestions').toJS()
);

const quantityOfQuestions = Object.keys(OPEN_QUESTIONS_SUBJECT).length + Object.keys(OPEN_QUESTIONS_RYTHM).length +
                            Object.keys(OPEN_QUESTIONS_DIDACTICS).length + Object.keys(OPEN_QUESTIONS_COMMITMENT).length;

export const makeShouldButtonBeEnabled = () => createSelector(
  makeSelectQuestions(),
  (questions) => Object.keys(questions).length === quantityOfQuestions
);
