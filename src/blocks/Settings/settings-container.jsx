import React, {Component} from "react";
import styles from './settings.module.css';
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import withRegisterRedirect from "../../HOC/app-hoc";


class SettingsC extends Component {
    render() {

        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

const SettingsContainer = compose(connect(mapStateToProps, {}),
    withRegisterRedirect,)(SettingsC);

export default SettingsContainer;