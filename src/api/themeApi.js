import axiosClient from "./axiosClient";
//get theme api
const themeApi = {
  getAll: () => {
    const url = "/themes";
    return axiosClient.get(url);
  },
  getId: (id) => {
    const url = "/themes";
    return axiosClient.get(url);
  },
  getLimit: (params) => {
    const url = "/themes";
    return axiosClient.get(url, { params });
  },
};

export default themeApi;
