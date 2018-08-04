import { createSelector } from 'reselect';

/**
 * Direct selector to the startClass state domain
 */
const selectStartClassDomain = (state) => state.get('startClass');

/**
 * Other specific selectors
 */

export const makeSelectFoo = () => createSelector(
  selectStartClassDomain(),
  (substate) => substate.get('foo').toJS()
);
