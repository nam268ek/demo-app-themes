import axiosClient from "./axiosClient";
//get theme api
const themeApi = {
  getUser: () => {
    return axiosClient.get(`/user`);
  },
  updateUser: (params) => {
    const url = "/user/update";
    return axiosClient.put(url, { params });
  },
  updatePassword: (params) => {
    const url = "/user/update-pass";
    return axiosClient.put(url, { params });
  },
  getLogin: (params) => {
    const url = "/login";
    return axiosClient.post(url, { params });
  },
  getRefreshToken: (params) => {
    
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
  },
  checkOutPurchase: (params) => {
    const url = "/checkout";
    return axiosClient.post(url, { params });
  },
  getDataPurchase: () => {
    const url = "/checkout";
    return axiosClient.get(url);
  },
  uploadFile: (formData) => {
    const url = "/image-upload";
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  paymentRequest: (params) => {
    const url = "/create-checkout-session";
    return axiosClient.post(url, { params });
  },
};

export default themeApi;
