import { AxiosClient } from "../config/axiosClient";

export const getProvince = () => {
  return AxiosClient.get("/address/provinces");
};
export const getDistrict = (id) => {
  return AxiosClient.get(`/address/${id}/districts`);
};
export const getWard = (id) => {
  return AxiosClient.get(`/address/${id}/wards`);
};
export const search = (payload) => {
  return AxiosClient.post(`/search`, payload);
};
