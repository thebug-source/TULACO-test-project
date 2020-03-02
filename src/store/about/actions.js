import { getAbout } from '../../api';

export const SHOW_ABOUT = 'SHOW_ABOUT';
export const SET_ABOUT_LOADING = 'SET_ABOUT_LOADING';
export const SET_ABOUT_ERROR = 'SET_ABOUT_ERROR';

export const loadAbout = () => {

    return async (dispatch) => {

        dispatch(setAboutLoading(true));

        try {
            const about = await getAbout(localStorage.getItem('userID'));
            dispatch(showAbout(about));

        } catch (error) {

            dispatch(setAboutError(error));
            message(error.message);

        } finally {
            dispatch(setAboutLoading(false));
        }
    }
}

export const showAbout = (about) => ({
    type: SHOW_ABOUT,
    about,
});

export const setAboutLoading = (isLoading) => ({
    type: SET_ABOUT_LOADING,
    isLoading,
});

export const setAboutError = (error) => ({
    type: SET_ABOUT_ERROR,
    error,
});