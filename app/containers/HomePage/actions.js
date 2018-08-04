import { UPDATE_FIELD } from './constants';

export const updateField = (fieldType, value) => ({
  type: UPDATE_FIELD,
  fieldType,
  value,
});
