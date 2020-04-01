import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const withRegisterRedirect = (Component) => {

    class RegisterRedirect extends React.Component {

    render() {
        if (!this.props.isLoggedIn) return <Redirect to="/register"/>;

        return <Component {...this.props}/>

    }}

    const mapStateToPropsRedirect = (state) => {
        return {
            isLoggedIn: state.auth.isLoggedIn
        }
    };

    return connect(mapStateToPropsRedirect)(RegisterRedirect)
};

export default withRegisterRedirect;