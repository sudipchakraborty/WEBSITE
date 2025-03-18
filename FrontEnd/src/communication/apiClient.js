import axios from 'axios';

// Create Axios instance
const apiClient = axios.create({
  // baseURL: 'http://192.168.31.196:5000/api',
  baseURL: 'http://192.168.31.196:3000/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in the Authorization header
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Retrieve token from storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
