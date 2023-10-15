import axios from "axios";

const url = 'http://127.0.0.1:8000/django_api';

export const baseApi = axios.create({
  baseURL: url,
});

export const setAuthToken = (config) => {
  let accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const updateAuthToken = async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    error._retry = false;
    try {
      const response = await axios.post(`${url}/users/api/browser_refresh/`);
      localStorage.setItem("access_token", response.data.access);
      return baseApi.request(originalRequest);
    } catch (e) {
      console.log();
    }
  }
  return Promise.reject(error);
};

baseApi.interceptors.request.use(setAuthToken);
baseApi.interceptors.response.use(function (response) {
  return response;
}, updateAuthToken);
