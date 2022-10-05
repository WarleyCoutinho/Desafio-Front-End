import axios from 'axios';

// Variáveis de modo de produção

// const api = axios.create({
//   baseURL: 'https://tool-back-end.herokuapp.com',
// });

// Variáveis de modo de desenvolvimento

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
