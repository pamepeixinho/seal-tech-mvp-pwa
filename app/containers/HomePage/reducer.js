import { fromJS } from 'immutable';

import { CLEAR_STATE } from '../constants';
import {
  UPDATE_FIELD,
  SET_LOADING,
} from './constants';

export const initialState = fromJS({
  name: '',
  link: '',
  loading: false,
});

const handleUpdate = (state, action) => state.set(action.fieldType, action.value);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return handleUpdate(state, action);
    case CLEAR_STATE:
      return initialState;
    case SET_LOADING:
      return state.merge({ loading: action.loading });
    default:
      return state;
  }
};

export default reducer;
