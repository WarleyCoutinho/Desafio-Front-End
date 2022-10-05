import axios from 'axios';

const api = axios.create({
  baseURL: ' https://tool-back-end.herokuapp.com/',
});

export default api;
