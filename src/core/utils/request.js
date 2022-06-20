import axios from "axios";

const request = (path, method) => {
  console.log(import.meta.env);
  const config = {
    baseURL: import.meta.env.VITE_API_URL,
  };
  const axiosInstance = axios.create(config);
  return axiosInstance.request({url: path, method});
};

export const get = (url, params) => request(url, 'get', params);
