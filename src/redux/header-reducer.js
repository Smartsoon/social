import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "SET-USER-DATA";

let InitialStore = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,
};

const headerReducer = (state = InitialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                ...action.isLoggedIn
            };
        default:
            return state;
    }
};

export const authTC = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuth();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
};

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.doLogin(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error";
        dispatch(stopSubmit("login", {password: message}))
    }
};

export const logoutTC = () => async (dispatch) => {
    let response = await authAPI.doLogout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export const setAuthUserData = (id, email, login, loginStatus) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isLoggedIn: loginStatus}
});

export default headerReducer;