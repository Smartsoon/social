import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.friendsPage.users
};

export const getFriends = createSelector(getUsersSelector,(users) => {
    return users.filter(user => {
        return user.followed
    })});

export const getPageSizeSelector = (state) => {
    return state.friendsPage.pageSize
};

export const getTotalUsersCountSelector = (state) => {
    return state.friendsPage.totalUsersCount
};

export const getSelectedPageSelector = (state) => {
    return state.friendsPage.selectedPage
};

export const getIsFetchingSelector = (state) => {
    return state.friendsPage.isFetching
};

export const getIsSendFriendRequestSelector = (state) => {
    return state.friendsPage.isSendFriendRequest
};

export const getPortionSize = (state) => {
    return state.friendsPage.portionSize
};

