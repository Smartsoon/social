import {profileAPI} from "../api/api";
import {getOwnAvatarTC} from "./header-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-SER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const SET_USER_AVATAR = "SET-USER-AVATAR";

let initialStore = {
    postsData: [
        {id: 1, post: 'Hello', likes: 20},
        {id: 2, post: 'Hey, how are you, man?', likes: 34},
        {id: 3, post: 'Yo, bro', likes: 3},
        {id: 4, post: 'Gratz', likes: 5},
        {id: 5, post: 'Gratz', likes: 5},
    ],
    profile: null,
    textEdit: false,
    statusTypedText: "",
    statusText: "",
};

const ProfileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST: {
            let addedPost = {
                id: state.postsData.length,
                post: action.newPost,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, addedPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.userProfile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                statusText: action.status
            }
        }
        case SET_USER_AVATAR: {
            return {
                ...state,
                profile: {...state.profile, photos: action.link},
            }
        }
        default:
            return state;
    }
};

export const addNewPost = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setUserAvatar = (link) => ({type: SET_USER_AVATAR, link});

export const getUserProfileTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data))
};

export const setUserStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.setUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
};

export const savedAvatarTC = (file) => async (dispatch, getState) => {
    let response = await profileAPI.updateAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(setUserAvatar(response.data.data.photos))
        const id = getState().auth.id;
        dispatch(getOwnAvatarTC(id));
    }
};

export default ProfileReducer;