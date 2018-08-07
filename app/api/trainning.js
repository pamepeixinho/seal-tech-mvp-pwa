import { post } from './request';

// const url = 'http://fullstarks-api.sa-east-1.elasticbeanstalk.com';
const url = 'http://localhost:4000/trainning';

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
  debugger;
  return post(endpoint, answers);
};
