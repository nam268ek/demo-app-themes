import axiosClient from "./axiosClient";
//get theme api
const themeApi = {
  getLogin: (params) => {
    const url = "/login";
    return axiosClient.post(url, { params });
  },
  postRegister: (params) => {
    const url = "/register";
    return axiosClient.post(url, { params });
  },
  getAll: () => {
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
  getDetailShowCase: () => {
    const url = "/detail";
    return axiosClient.get(url);
  },
  getCardPostList: () => {
    const url = "/cardposts";
    return axiosClient.get(url);
  },
  getCardPostListLimit: (params) => {
    const url = "/cardposts";
    return axiosClient.get(url, { params });
  },
  asyncProductForUser: (params) => {
    const url = "/cart";
    return axiosClient.post(url, { params });
  },
  asyncCartFromDatabase: () => {
    const url = "/cart";
    return axiosClient.get(url);
  }
};

export default themeApi;
