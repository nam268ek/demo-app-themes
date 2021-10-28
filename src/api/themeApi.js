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
  showCase: () => {
    const url = "/showcase";
    return axiosClient.get(url);
  },
  getLimitShowCase: (params) => {
    const url = "/showcase";
    return axiosClient.get(url, { params });
  },
  getCardPostList: () => {
    const url = "/cardposts";
    return axiosClient.get(url);
  },
  getCardPostListLimit: (params) => {
    const url = "/cardposts";
    return axiosClient.get(url, { params });
  },
};

export default themeApi;
