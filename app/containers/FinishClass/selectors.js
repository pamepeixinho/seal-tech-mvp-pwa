import { createSelector } from 'reselect';

export const selectFinishClassDomain = (state) => state.get('finishClass');

export const selectGrade = (state) => selectFinishClassDomain(state).get('grade');

export const makeSelectQuestions = () => createSelector(
  selectFinishClassDomain,
  (state) => state.get('openQuestions').toJS()
);
