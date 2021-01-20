import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch((err) => {
      console.log("this is an error on the client", err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
     }
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// export const loginSpotify = (code) => dispatch =>  {
//   fetch('/api/auth/spotify', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ code }),
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       return Promise.reject(res);
//     }
//   });
// };

export const loginSpotify = () => dispatch => {
  fetch("/api/users/auth/spotify", {mode: 'no-cors'})
    .then(res => console.log(res))
    .catch(err =>console.log("error on client", err))
}


export const getSpotifyUser = (token) => dispatch => {
  fetch("https://api.spotify.com/v1/me", {
    method: 'post',
    headers: {
     'Authorization': `Bearer ${token}`,
     'Content-Type': 'application/x-www-form-urlencoded'
   }
 }).then((res) => {

   dispatch(setCurrentUser(res));
 }).catch((err) => {
   console.log(err)
 });
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
