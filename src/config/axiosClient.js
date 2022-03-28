import axios from "axios";

const axiosBase = axios.create({
  baseURL: " https://mern-dieu-be-production.up.railway.app/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
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
