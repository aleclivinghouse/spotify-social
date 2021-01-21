import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import dotenv from 'dotenv';
import {
   GET_ERRORS,
   SET_CURRENT_USER,
   USER_LOADING,
   GET_SPOTIFY_USER_DATA,
   GET_SPOTIFY_RECENTLY_PLAYED,
   SET_SPOTIFY_ACCESS_TOKEN
  } from "./types";

dotenv.config();

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


export const loginSpotify = userData => dispatch => {
    console.log("userData in action", userData);
//append a spotify secret to the user
  axios.post("/api/users/login/spotify", userData)
    .then(res => {
      // Save to localStorage
        console.log("this is the client response loginSpotify ", res);
        console.log("this is the client response data loginSpotify ", res.data);
      //Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(" this is the error loginSpotify: ", err));
}

//send the spotify user /dashboard
export const getSpotifyUser = (token) => dispatch => {
  axios.get("https://api.spotify.com/v1/me", {
    headers: {
     "Content-Type": "application/json",
     "Authorization": "Bearer " + token,
   }
 }).then((res) => {
      dispatch({
        type: GET_SPOTIFY_USER_DATA,
        payload: res.data
      })
     }
    )
    .catch((err) => {
      console.log("getSpotifyUser error: ", err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
     }
    );
 };

export const getSpotifyRecentlyPlayed = (token) => dispatch => {
     console.log("this is the token in getSpotifyRecentlyPlayed", token);
  axios.get("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
     "Content-Type": "application/json",
     "Authorization": "Bearer " + token,
   }
 }).then((res) => {
   console.log("this is the action in getSpotifyRecentlyPlayed", res.data);
   dispatch({
        type: GET_SPOTIFY_RECENTLY_PLAYED,
        payload: res.data
      })
     }
    )
    .catch((err) => {
      console.log("getSpotifyRecentlyPlayed error: ", err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      }
    );
}

export const gotSpotifyUserData = spotifyUserData => {
  return {
    type: GET_SPOTIFY_USER_DATA,
    payload: spotifyUserData
  };
};

export const setSpotifyAccessToken = accessToken => {
  return {
    type: SET_SPOTIFY_ACCESS_TOKEN,
    payload: accessToken
  };
};

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
