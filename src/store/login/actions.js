import { sendLoginGHRequest } from '../../api';
import { history } from '../../utils';

export const LOGIN_OK = 'LOGIN_OK';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_LOGIN_ERR = 'SET_LOGIN_ERR';

export const loginGitHub = (username, password) => {

  return async (dispatch) => {

    dispatch(setLoginLoading(true));

    try {
      const loginData = await sendLoginGHRequest(username, password);

      localStorage.setItem('userID', loginData.user);

      dispatch(loginSuccess());

      history.push('/');

    } catch (error) {
      dispatch(setLoginError(error));
    } finally {
      dispatch(setLoginLoading(false));
    }
  }
}

export const loginSuccess = () => ({
  type: LOGIN_OK,
});

export const setLoginLoading = (isLoading) => ({
  type: SET_LOGIN_LOADING,
  isLoading,
});

export const setLoginError = (error) => ({
  type: SET_LOGIN_ERR,
  error,
});