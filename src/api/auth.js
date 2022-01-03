import jwt_decode from "jwt-decode";
import axiosClient from "./axiosClient";
// import store from "app/store";
// import refreshToken from 'features/Login/refreshToken';

const getToken = async () => {
  const localStore = localStorage.getItem("state");
  const { login } = JSON.parse(localStore);
  const token = login?.auth?.token;

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

//refresh token
let refreshTokenRequest = null;
const requestApiToken = async (token) => {
  const tokenExpired = await checkExpireToken(token);

  if (tokenExpired) {
    refreshTokenRequest = refreshTokenRequest
      ? refreshTokenRequest
      : handleRefreshToken();

    const newToken = refreshTokenRequest;
    // reset token request for the next expiration
    refreshTokenRequest = null;

    //save new token to local storage
    updateTokenLocalStorage(newToken);

    return;
  }
};

const updateTokenLocalStorage = (newToken) => {
  const localStore = localStorage.getItem("state");
  const state = JSON.parse(localStore);
  state.login.auth = newToken.data;
  localStorage.setItem("state", JSON.stringify(state));
};

const handleRefreshToken = async () => {
  const localStore = localStorage.getItem("state");
  const { login } = JSON.parse(localStore);
  const refreshToken = login?.auth?.refreshToken;
  
  console.log("refreshToken:", refreshToken);
  const response = await axiosClient.post("/auth/refresh", {
    refreshToken,
  });
  //disaptch refresh token update to store
  // store.dispatch(refreshToken(refreshToken));
  return response;
};

const checkExpireToken = async () => {
  const localStore = localStorage.getItem("state");
  const { login } = JSON.parse(localStore);
  const token = login?.auth?.token;
  const expire = await jwt_decode(token).exp;

  console.log("expire:", expire);
  console.log("current time:", new Date() / 1000);
  console.log("expire - current time:", expire - Math.floor(new Date() / 1000));

  if (Math.floor(new Date() / 1000) >= expire) {
    console.log("token expired");
   
    return true; //token is expired
  } else return false; //token is not expired
  
};

const ValidateToken = {
  getToken,
  requestApiToken,
  checkExpireToken,
  handleRefreshToken,
  updateTokenLocalStorage,
};
export default ValidateToken;
