/*
 *
 * StartClass reducer
 *
 */

import { fromJS } from 'immutable';

import {
  TOGGLE_ACTIVE_CLASS,
  FINISH_CLASS,
} from './constants';
import { CLEAR_STATE } from '../constants';

const initialState = fromJS({
  isActiveClass: false,
});

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTIVE_CLASS:
      return state.merge({ isActiveClass: !state.get('isActiveClass') });
    case FINISH_CLASS:
      return state.merge({ isActiveClass: false });
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default startClassReducer;
