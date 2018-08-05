/*
 *
 * FinishClass reducer
 *
 */

import { fromJS } from 'immutable';

import {
  UPDATE_GRADE,
  UPDATE_QUESTION_BY_TYPE,
} from './constants';

const initialState = fromJS({
  grade: 0,
  openQuestions: {
    interesting: 0,
    previousKnowledge: 0,
    needToPause: 0,
    videoRhythm: 0,
  },
});

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GRADE:
      return state.merge({ grade: action.value });
    case UPDATE_QUESTION_BY_TYPE:
      return state.mergeIn(['openQuestions'], { [action.questionType]: action.value });
    default:
      return state;
  }
}

export default startClassReducer;
