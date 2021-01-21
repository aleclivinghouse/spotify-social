import { SET_CURRENT_USER, USER_LOADING, GET_SPOTIFY_USER_DATA } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  spotifyUserData: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
      case GET_SPOTIFY_USER_DATA:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          spotifyUserData: action.payload
        };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
