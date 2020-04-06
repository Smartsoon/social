import React from "react";
import {connect} from "react-redux";
import Register from "./register";

class Registerc extends React.Component {

render() {
    return <Register isLoggedIn={this.props.isLoggedIn}/>
}
}

const mapStateToProps = (state) => {
    return {
    isLoggedIn: state.auth.isLoggedIn
    }
};

const mapDispatchToProps = (state) => {

};

const RegistersContainer = connect(mapStateToProps, mapDispatchToProps)(Registerc);

export default RegistersContainer;