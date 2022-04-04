import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

// lần đầu req nội dung token chưa được lấy
axiosBase.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosBase.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const AxiosClient = axiosBase;
