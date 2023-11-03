import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Set your base API URL here
});

export default api;