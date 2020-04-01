import {
    addNewPost,
    getUserProfileTC,
    getUserStatusTC,
    setUserStatusTC
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Posts from "./Post/posts";
import UserInfo from "./UserInfo/user-info";
import React from "react";
import {withRouter} from "react-router-dom";
import withRegisterRedirect from "../../HOC/app-hoc"
import {compose} from "redux";


class ProfileC extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId)
    }

    addPost = (values) => {
        if (values.newPostBody.length === 0) {
            return
        }
        this.props.addNewPost(values.newPostBody);
        values.newPostBody = ''
    };

    render() {
        return (
            <main>
                <UserInfo profile={this.props.profile} id={this.props.id} statusText={this.props.statusText} setUserStatus={this.props.setUserStatusTC}/>
                <Posts addPost={this.addPost} postsData={this.props.postsData}/>
            </main>
        )};
}

// const mapStateToProps = (state) => {
//     return {
//         postsData: state.profilePage.postsData,
//         profile: state.profilePage.profile,
//         statusTypedText: state.profilePage.statusTypedText,
//         statusText: state.profilePage.statusText,
//         id: state.auth.id
//
//     }
// };

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile,
        statusTypedText: state.profilePage.statusTypedText,
        statusText: state.profilePage.statusText,
        id: state.auth.id

    }
};

export default compose (
    withRegisterRedirect,
    connect(mapStateToProps, {addNewPost, getUserProfileTC, getUserStatusTC, setUserStatusTC}),
    withRouter,
) (ProfileC);