import { post, request } from './request';

// const url = 'http://fullstarks-api.sa-east-1.elasticbeanstalk.com';
const url = 'http://localhost:4000';

export const uploadImage = (image) => {
  const endpoint = `${url}/frame`;
  return post(endpoint, {
    image,
    meta: {
      teacher: 'mr. teacher',
      course: 'Big Data',
      module: 'Introduction',
      class: {
        title: 'Aula maneira',
        date: new Date().get,
      }
    }
  }).then((data) => {
    console.log('=======predictions=======');
    console.log(data);
    console.log('=========================');
  }).catch((err) => {
    console.error(err);
  });
};

export const fetchDashboard = () => {
  const endpoint = `${url}/dashboard`;
  return request(endpoint);
};
