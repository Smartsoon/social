import React from "react";
import styles from './messages.module.css';

const Messages = ({messagesData}) => {

    return(
        <div className={styles.message}>
            {messagesData.map(message => <p key={message.id}>{message.message}</p>)}
        </div>
    )
};

export default Messages;