import { post } from './request';

// TODO: use webpack define plugin and set env vars in heroku
const url = process.env.NODE_ENV === 'production'
  ? 'https://focaai-api.herokuapp.com/showcase'
  : 'http://localhost:4000/showcase';

export const uploadImageFrame = (id, image) => {
  const endpoint = `${url}/frame`;
  return post(endpoint, { image });
};
