import React, {Component} from "react";
import styles from './audio.module.css';
import {connect} from "react-redux";
import withRegisterRedirect from "../../HOC/app-hoc";
import {compose} from "redux";


class AudioC extends Component {
    render() {

        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const AudioContainer = compose(connect(mapStateToProps, {}),
    withRegisterRedirect,)(AudioC);

export default AudioContainer;