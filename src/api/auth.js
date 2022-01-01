import jwt_decode from "jwt-decode";
import axiosClient from './axiosClient';

const getToken = async () => {
  const localStore = localStorage.getItem("state");
  const state = JSON.parse(localStore);
  const token = state?.login.token;

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
  const tokenExpired = checkExpireToken(token);

  if (tokenExpired) {
    refreshTokenRequest = refreshTokenRequest
      ? refreshTokenRequest
      : handleRefreshToken();

    const newToken = refreshTokenRequest;
    // reset token request for the next expiration
    refreshTokenRequest = null;

    //save new token to local storage
    const localStore = localStorage.getItem("state");
    const state = JSON.parse(localStore);
    state.login.token = newToken.data;
    localStorage.setItem("state", JSON.stringify(state));

    return;
  }
};

const handleRefreshToken = async () => {
  const localStore = localStorage.getItem("state");
  const state = JSON.parse(localStore);
  const { refreshToken } = state?.login.token;

  const response = await axiosClient.post("/auth/refresh", {
    refreshToken,
  });

  return response;
};

const checkExpireToken = (token) => {
  const expire = jwt_decode(token).exp;
  return Date.now() >= expire * 1000 ? true : false;
};

const ValidateToken = {
  getToken,
  requestApiToken,
  checkExpireToken,
  handleRefreshToken,
};
export default ValidateToken;
