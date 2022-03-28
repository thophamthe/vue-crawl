import { AxiosClient } from "../config/axiosClient";

export const getProvince = () => {
  return AxiosClient.get("/province");
};
export const getDistrict = (id) => {
  return AxiosClient.get(`/district/${id}`);
};
export const getWard = (id) => {
  return AxiosClient.get(`/ward/${id}`);
};
export const search = (payload) => {
  return AxiosClient.post(`/search`, payload);
};
