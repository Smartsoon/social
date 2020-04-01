import {setCurrentPage, getUsersTC, unFollowTC, followTC} from "../../redux/friends-reducer";
import {connect} from "react-redux";
import React from "react";
import Friends from "./friends";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import withRegisterRedirect from "../../HOC/app-hoc";
import {
    getIsFetchingSelector,
    getIsSendFriendRequestSelector,
    getTotalUsersCountSelector,
    getPageSizeSelector,
    getSelectedPageSelector,
    getUsersSelector,
    getFriends, getPortionSize
} from "../../redux/user-selectors";

class FriendsC extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.selectedPage, this.props.pageSize)
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     selectedPage={this.props.selectedPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     friendsData={this.props.friendsData}
                     isSendFriendRequest={this.props.isSendFriendRequest}
                     unFollowTC={this.props.unFollowTC}
                     followTC={this.props.followTC}
                     portionSize={this.props.portionSize}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        friendsData: getFriends(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        selectedPage: getSelectedPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isSendFriendRequest: getIsSendFriendRequestSelector(state),
        portionSize: getPortionSize(state)

    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         doFollow: (userId) => {
//             let action = doFollowAC(userId);
//             dispatch(action)
//         },
//
//         doUnfollow: (userId) => {
//             let action = doUnfollowAC(userId);
//             dispatch(action)
//         },
//
//         setUsers: (users) => {
//             let action = setUsersAC(users);
//             dispatch(action);
//         },
//
//         setCurrentPage: (pageNumber) => {
//             let action = setCurrentPageAC(pageNumber);
//             dispatch(action)
//         },
//
//         setTotalUsersCount: (overallCount) => {
//             let action = setTotalUsersCountAC(overallCount);
//             dispatch(action)
//     },
//         setFetchingStatus: (fetchingStatus) =>{
//             let action = setIsFetchingAC(fetchingStatus);
//             dispatch(action)
//         }
//
//     }
// };

export default compose (
connect(mapStateToProps, {setCurrentPage, getUsersTC, unFollowTC, followTC}),
withRegisterRedirect
) (FriendsC);