import axios from 'axios';

const API = axios.create({
  baseURL: 'http://18.223.170.173:8000/api',
});

export default API;
