/*
 *
 * StartClass reducer
 *
 */

import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  UPLOAD_IMAGE_FRAME,
} from './constants';
import { CLEAR_STATE } from '../constants';

const initialState = fromJS({
  anger: 0,
  contempt: 0,
  disgust: 0,
  fear: 0,
  happiness: 0,
  neutral: 0,
  sadness: 0,
  surprise: 0,
  commitment: 0,
});

const handleEmotions = (state, action) =>
  handle(state, action, {
    success: (prevState) => {
      const { anger, contempt, disgust, fear, happiness, neutral, sadness, surprise, commitment } = action.payload;
      return prevState.merge({ anger, contempt, disgust, fear, happiness, neutral, sadness, surprise, commitment });
    },
  });

function startClassReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE_FRAME:
      return handleEmotions(state, action);
    case CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
}

export default startClassReducer;
