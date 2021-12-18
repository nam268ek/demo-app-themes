import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

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


const getToken = async () => {
  const navigate = useNavigate();
  const localStore = localStorage.getItem("state");
  const state = JSON.parse(localStore);
  const token = state.login.token;
  //expire token
  const expire = jwt_decode(token).exp;

  if (Date.now() >= expire * 1000) {
    localStorage.removeItem("state");
    navigate();
    return null;
  }

  //No loged in user
  if (!token) return null;

  //Loged in user
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log("token expired");
    }, 5000);

    resolve(token);
    clearTimeout(waitTimer);
  });
};

axiosClient.interceptors.request.use(async (config) => {
  //add token to header
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handel error
    throw error;
  }
);

export default axiosClient;
