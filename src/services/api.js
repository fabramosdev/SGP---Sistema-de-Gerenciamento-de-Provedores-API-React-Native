import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sgp.net.br/teste/api/ura'
});

export default api;