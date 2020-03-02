
import { LOGIN_OK, SET_LOGIN_LOADING, SET_LOGIN_ERR } from './actions';

function getInitialState() {
  return {
    isLoggedIn: false,
    isLoading: false,
    error: null,
  };
}

export function loginReducer(state = getInitialState(), action) {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_LOGIN_ERR:
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
}