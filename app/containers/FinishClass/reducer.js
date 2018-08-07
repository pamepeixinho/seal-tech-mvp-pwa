/*
 *
 * FinishClass reducer
 *
 */

import { fromJS } from 'immutable';

import { CLEAR_STATE } from '../constants';
import {
  UPDATE_GRADE,
  UPDATE_QUESTION_BY_TYPE,
} from './constants';

const initialState = fromJS({
  grade: 0,
  openQuestions: {
  },
});

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GRADE:
      return state.merge({ grade: action.value });
    case UPDATE_QUESTION_BY_TYPE:
      return state.mergeIn(['openQuestions'], { [action.questionType]: action.value });
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default startClassReducer;
