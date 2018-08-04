/*
 *
 * StartClass reducer
 *
 */

import { fromJS } from 'immutable';
// import { handle } from 'redux-pack';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  isActiveClass: false,
});

// const handleSuccess = (state, action) => state.merge({ foo: action.payload.foo });

// const handleAction = (state, action) =>
//  handle(state, action, {
//    success: (prevState) => handleSuccess(prevState, action),
//  });

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return handleAction(state, action);
    default:
      return state;
  }
}

export default startClassReducer;
