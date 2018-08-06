import { post } from './request';

// const url = 'http://fullstarks-api.sa-east-1.elasticbeanstalk.com';
const url = 'http://localhost:4000/train';

export const initialData = (name, link) => post(`${url}/initial-data`, {
  name,
  classLink: link,
});
