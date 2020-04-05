import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "SET-USER-DATA";
const SET_OWN_AVATAR = "SET_OWN_AVATAR";

let InitialStore = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,
    ownAvatar: null
};

const headerReducer = (state = InitialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                ...action.isLoggedIn
            };

        case SET_OWN_AVATAR:
            return {
              ...state,
              ownAvatar: action.avatar

            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, loginStatus) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isLoggedIn: loginStatus}
});

export const setOwnAvatar = (avatar) => ({type: SET_OWN_AVATAR, avatar});

export const authTC = () => {
    return async (dispatch) => {
        const data = await authAPI.getAuth();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
            dispatch(getOwnAvatarTC(id))
        }
    }
};

export const getOwnAvatarTC = (id) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(id);
    dispatch(setOwnAvatar(response.photos.small))
};

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.doLogin(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error";
        dispatch(stopSubmit("login", {password: message}))
    }
};

export const logoutTC = () => async (dispatch) => {
    const response = await authAPI.doLogout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};





export default headerReducer;