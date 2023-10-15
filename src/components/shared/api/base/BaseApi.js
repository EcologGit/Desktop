import axios from "axios";
import { url } from "@/main";
export const baseApi = axios.create({
  baseURL: "http://81.163.30.36/django_api",
  timeout: 5000,
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
  if (
    error.response.status === 401 &&
    originalRequest &&
    !originalRequest._isRetry
  ) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.post(`${url}/users/api/browser_refresh/`);
      localStorage.setItem("access_token", response.data.access);
      return baseApi.request(originalRequest);
    } catch (e) {
      console.log();
    }
  }
};

baseApi.interceptors.request.use(setAuthToken);
baseApi.interceptors.response.use(null, updateAuthToken);
