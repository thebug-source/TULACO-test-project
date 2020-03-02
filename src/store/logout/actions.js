import { history } from '../../utils';

export const LOGOUT_OK = 'LOGOUT_OK';
export const LOGOUT_LOADING = 'LOGOUT_LOADING';
export const LOGOUT_ERR = 'LOGOUT_ERR';

export const logoutGitHub = () => {

  return async (dispatch) => {

    dispatch(setLogoutLoading(true));

    try {
      localStorage.removeItem('userID');

      dispatch(logoutSuccess());
      history.push('/');

    } catch (error) {
      dispatch(setLogoutError(error));
    } finally {
      dispatch(setLogoutLoading(false));
    }
  }
}

export const logoutSuccess = () => ({
  type: LOGOUT_OK,
});

export const setLogoutLoading = (isLoading) => ({
  type: LOGOUT_LOADING,
  isLoading,
});

export const setLogoutError = (error) => ({
  type: LOGOUT_ERR,
  error,
});