import friendsAPI from "../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_BUTTON_ACTIVITY = "SET-BUTTON-ACTIVITY";


//     {
//         id: 1,
//         followed: true,
//         name: {firstName: "Andrey", lastName: "Blabla"},
//         location: {country: "Ukraine", city: "Kiev"}
//     },
//     {
//         id: 2,
//         followed: true,
//         name: {firstName: "Stepan", lastName: "Bandera"},
//         location: {country: "Ukraine", city: "Lviv"}
//     }
// ],
// userData: [
//     {
//         id: 1,
//         followed: true,
//         name: {firstName: "Andrey", lastName: "Blabla"},
//         location: {country: "Ukraine", city: "Kiev"}
//     },
//     {
//         id: 2,
//         followed: true,
//         name: {firstName: "Stepan", lastName: "Bandera"},
//         location: {country: "Ukraine", city: "Lviv"}
//     },
//     {
//         id: 3,
//         followed: false,
//         name: {firstName: "Urur", lastName: "Bandera"},
//         location: {country: "Ukraine", city: "Odessa"}
//     }
let initialStore = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    selectedPage: 1,
    isFetching: true,
    isSendFriendRequest: [],
    portionSize: 10
};

const friendsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}

                    }
                    return user

                })
            };

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };

        case SET_USERS: {
            return {...state, users: [...action.users]};
        }

        case SET_CURRENT_PAGE: {
            return {...state, selectedPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.overallCount};
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.fetchingStatus}
        }

        case SET_BUTTON_ACTIVITY: {
            return {
                ...state,
                isSendFriendRequest: action.requestStatus
                    ? [...state.isSendFriendRequest, action.userId]
                    : state.isSendFriendRequest.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }


};

export const doFollow = (userId) => ({type: FOLLOW, userId});
export const doUnfollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const setTotalUsersCount = (overallCount) => ({type: SET_TOTAL_USERS_COUNT, overallCount});
export const setFetchingStatus = (fetchingStatus) => ({type: TOGGLE_IS_FETCHING, fetchingStatus});
export const setButtonActivity = (requestStatus, userId) => ({type: SET_BUTTON_ACTIVITY, requestStatus, userId});

export const getUsersTC = (selectedPage, pageSize) => async (dispatch) => {
    dispatch(setFetchingStatus(true));
    let data = await friendsAPI.getUsers(selectedPage, pageSize);
    dispatch(setFetchingStatus(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const followTC = (userId) => async (dispatch) => {
    dispatch(setButtonActivity(true, userId));
    let response = await friendsAPI.doFollow(userId);
    dispatch(setButtonActivity(false, userId));
    if (response.data.resultCode === 0) {
        return dispatch(doFollow(userId));
    }
};

export const unFollowTC = (userId) => async (dispatch) => {
    dispatch(setButtonActivity(true, userId));
    let response = await friendsAPI.doUnfollow(userId);
    dispatch(setButtonActivity(false, userId));
    if (response.data.resultCode === 0) {
        return dispatch(doUnfollow(userId));
    }
};

// export const unFollowTC = (userId) => {
//     return (dispatch) => {
//         dispatch(setButtonActivity(true, userId));
//         friendsAPI.doUnfollow(userId)
//             .then((response) => {
//                 dispatch(setButtonActivity(false, userId));
//                 if (response.data.resultCode === 0) {
//                     return dispatch(doUnfollow(userId));
//                 }
//             })
//     }
//
// };


export default friendsReducer;