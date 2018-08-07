import { post } from './request';

// TODO: use webpack define plugin and set env vars in heroku
const url = process.env.NODE_ENV === 'production'
  ? 'https://focaai-api.herokuapp.com/v2/trainning'
  : 'http://localhost:4000/v2/trainning';

export const initialData = (name, link) => post(`${url}/initial-data`, {
  name,
  classLink: link,
});

export const uploadImageFrame = (id, image) => {
  const endpoint = `${url}/upload-frame/${id}`;
  return post(endpoint, { image });
};

export const uploadAnswers = (id, answers) => {
  const endpoint = `${url}/answers/${id}`;
  return post(endpoint, answers);
};
