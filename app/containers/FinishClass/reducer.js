/*
 *
 * FinishClass reducer
 *
 */

import { fromJS } from 'immutable';

import {
  UPDATE_GRADE,
} from './constants';

const initialState = fromJS({
  grade: 0,
});

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GRADE:
      return state.merge({ grade: action.value });
    default:
      return state;
  }
}

export default startClassReducer;
