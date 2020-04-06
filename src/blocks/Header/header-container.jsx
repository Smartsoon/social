import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Header from "./header";
import {loginTC, logoutTC} from "../../redux/header-reducer";


class HeaderC extends React.Component {

    doLogin(email, password, rememberMe, captcha) {
        this.loginTC(email, password, rememberMe, captcha);
    }

    render() {
        return <Header currentCaptcha={this.props.currentCaptcha}
                       ownAvatar={this.props.ownAvatar}
                       id={this.props.id} doLogout={this.logoutTC}
                       doLogin={this.doLogin} {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    login: state.auth.login,
    id: state.auth.id,
    ownAvatar: state.auth.ownAvatar,
    currentCaptcha: state.auth.currentCaptcha
});

let withURLHeaderAPI = withRouter(HeaderC);

const HeaderContainer = connect(mapStateToProps, {loginTC, logoutTC})(withURLHeaderAPI);

export default HeaderContainer;