import axios from "axios";
import queryString from "query-string";
import ValidateToken from "./auth";
//config .env for production
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

//config axios client
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});


axiosClient.interceptors.request.use(async (config) => {
  //add token to header
  const token = await ValidateToken.getToken();
  if (token) {
    //add token to header
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  async (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await axiosClient.post("/auth/refresh", {
            refreshToken: ValidateToken.handleRefreshToken(),
          });
          ValidateToken.updateTokenLocalStorage(rs);
          //config new token
          originalConfig.headers.Authorization = `Bearer ${rs.data.token}`;
          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
