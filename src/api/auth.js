import jwt_decode from "jwt-decode";
import axiosClient from "./axiosClient";
import store from "app/store";
import { setUser,updateStatusUser } from "features/Login/loginSlice";

const getToken = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  //No loged in user
  if (!token) return null;

  //Loged in user
  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log("token timeout");
    }, 5000);

    resolve(token);
    clearTimeout(waitTimer);
  });
};

//refresh token
let refreshTokenRequest = null;
const requestApiToken = async () => {
  // const tokenExpired = await checkExpireToken();
  // if (tokenExpired === true) {
  //   refreshTokenRequest = refreshTokenRequest
  //     ? refreshTokenRequest
  //     : handleRefreshToken();
  //   const res = refreshTokenRequest;
  //   // reset token request for the next expiration
  //   refreshTokenRequest = "a";
  //   //save new token to local storage
  //   updateTokenLocalStorage(res);
  //   return;
  // }
};

const updateTokenLocalStorage = async (res) => {
  const data = await new Promise((resolve, reject) => {
    res.code === 200 && resolve(res.data);
    res.code !== 200 && reject(res.message);
  });

  if (data.token) {
    const { token, refreshToken } = data;
    const { _id } = jwt_decode(token);
    
    store.dispatch(setUser(_id));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
  }
};

const handleRefreshToken = () => {
  const refreshToken = JSON.parse(localStorage.getItem("refresh_token"));
  return refreshToken;
};

const checkExpireToken = async () => {
  const token = JSON.parse(localStorage.getItem("refresh_token"));
  if (token) {
    const { exp } = await jwt_decode(token);
    if (Math.floor(new Date() / 1000) >= exp) {
      store.dispatch(updateStatusUser(false));
      return true; //token is expired
    } else {
      store.dispatch(updateStatusUser(true));
      return false; //token is not expired
    }
  }
};

const ValidateToken = {
  getToken,
  requestApiToken,
  checkExpireToken,
  handleRefreshToken,
  updateTokenLocalStorage,
};
export default ValidateToken;
