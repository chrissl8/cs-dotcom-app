import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cs-dotcom-app-default-rtdb.firebaseio.com/',
});

export default instance;
