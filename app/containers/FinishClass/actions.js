import { UPDATE_GRADE } from './constants';

export const updateGrade = (value) => ({
  type: UPDATE_GRADE,
  value,
});
