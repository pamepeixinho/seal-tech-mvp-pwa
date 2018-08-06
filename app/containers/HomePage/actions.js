import { push } from 'react-router-redux';

import { initialData } from 'api/train';

import { UPDATE_FIELD } from './constants';
import { selectName, selectLink } from './selectors';

export const updateField = (fieldType, value) => ({
  type: UPDATE_FIELD,
  fieldType,
  value,
});

export const goToNextStep = () => (dispatch, getState) => {
  const name = selectName(getState());
  const link = selectLink(getState());
  return initialData(name, link).then((data) => {
    const { id } = data;
    dispatch(push(`/comecar-aula/${id}`));
  });
};
