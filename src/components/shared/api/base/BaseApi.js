import axios from "axios";

const url = "http://81.163.30.36/django_api";

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
      const config = {
        method: "post",
        withCredentials: true
      };
      const response = await axios.request(
        `${url}/users/api/browser_refresh/`,
        config
      );
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
