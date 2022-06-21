import axios from "axios";
import Snackbar from "./snackbar";

const request = (path, method) => {
  // console.log(import.meta.env);
  const config = {
    baseURL: import.meta.env.VITE_API_URL,
  };
  const axiosInstance = axios.create(config);
  axiosInstance.interceptors.response.use(responseInterceptor, errorHandle)
  return axiosInstance.request({url: path, method});
};

const responseInterceptor = (response) => {
  console.log(response);
  return response;
};
/**
 * 错误处理
 * @param error {{response: any, message: string}}
 * @returns {Promise<never>}
 */
const errorHandle = (error) => {
  // console.log(error.response.data.toString())
  Snackbar.error(error.message);
  return Promise.reject(error);
};

export const get = (url, params) => request(url, 'get', params);
export const post = (url, data) => request(url, 'post', data);
