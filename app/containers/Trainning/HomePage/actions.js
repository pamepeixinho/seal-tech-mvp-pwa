import { push } from 'react-router-redux';

import { initialData } from 'api/trainning';

import { UPDATE_FIELD, SET_LOADING } from './constants';
import { selectName, selectLink } from './selectors';

export const updateField = (fieldType, value) => ({
  type: UPDATE_FIELD,
  fieldType,
  value,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const goToNextStep = () => (dispatch, getState) => {
  const name = selectName(getState());
  const link = selectLink(getState());
  dispatch(setLoading(true));
  return initialData(name, link).then(
    (data) => {
      const { id } = data;
      dispatch(setLoading(false));
      dispatch(push(`/trainning/start-class/${id}`));
    },
    () => dispatch(setLoading(false))
  );
};
