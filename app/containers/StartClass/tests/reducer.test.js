
import { fromJS } from 'immutable';
import startClassReducer from '../reducer';

describe('startClassReducer', () => {
  it('returns the initial state', () => {
    expect(startClassReducer(undefined, {})).toEqual(fromJS({}));
  });
});
