/*
 *
 * StartClass reducer
 *
 */

import { fromJS } from 'immutable';

import {
  TOGGLE_ACTIVE_CLASS,
} from './constants';

const initialState = fromJS({
  isActiveClass: false,
});


function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ACTIVE_CLASS:
      return state.merge({ isActiveClass: !state.get('isActiveClass') });
    default:
      return state;
  }
}

export default startClassReducer;
