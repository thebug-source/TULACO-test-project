
import { LOGOUT_OK, LOGOUT_LOADING, LOGOUT_ERR } from './actions';

function getInitialState() {
  return {
    isLoggedOut: false,
    isLoading: false,
    error: null,
  };
}

export function logoutReducer(state = getInitialState(), action) {
  switch (action.type) {
    case LOGOUT_OK:
      return {
        ...state,
        isLoggedOut: true,
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
}