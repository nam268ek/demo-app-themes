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

  ValidateToken.requestApiToken(token);
  
  if (token) {
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
  async (error) => {
    throw error;
  }
);

export default axiosClient;
