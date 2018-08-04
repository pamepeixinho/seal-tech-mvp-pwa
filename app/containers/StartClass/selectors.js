// import { createSelector } from 'reselect';

/**
 * Direct selector to the startClass state domain
 */
export const selectStartClassDomain = (state) => state.get('startClass');

export const selectIsActiveClass = (state) => selectStartClassDomain(state).get('isActiveClass');

