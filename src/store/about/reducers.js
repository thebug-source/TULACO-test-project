
import { SHOW_ABOUT, SET_ABOUT_LOADING, SET_ABOUT_ERROR } from './actions';

function getInitialState() {
  return {
    about: [],
    isLoading: false,
    error: null,
  };
}

export function aboutReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SHOW_ABOUT:
      return {
        ...state,
        about: action.about,
      };
    case SET_ABOUT_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ABOUT_ERROR:
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
}