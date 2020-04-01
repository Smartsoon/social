import React from "react";
import styles from './messages.module.css';
import {Redirect} from "react-router-dom";

const Message = ({message}) => {

    return(
        <div className={styles.message}>
            <p>{message}</p>
        </div>
    )
};

export default Message;