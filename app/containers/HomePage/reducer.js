import { fromJS } from 'immutable';

import {
  UPDATE_FIELD,
} from './constants';

export const initialState = fromJS({
  name: '',
  link: '',
});

const handleUpdate = (state, action) => state.set(action.fieldType, action.value);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return handleUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;
