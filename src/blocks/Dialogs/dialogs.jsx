import React from "react";
import styles from './dialogs.module.css'
import People from "./People/people.jsx";
import Message from "./Messages/messages.jsx";
import {SendMessageArea} from "./SendMessageArea/send-message-area";


const Dialogs = ({peopleData, messagesData, sendNewMessage}) => {

    const allPeople = peopleData.map(dialog => <People name={dialog.name}
                                                             key={dialog.id}
                                                             id={dialog.id}/>);

    const allMessages = messagesData.map(message => <Message key={message.id}
                                                                   message={message.message}/>);

    let addNewMessage = (values) => {
        if (values.newMessageBody === undefined) {
            return
        }
        sendNewMessage(values.newMessageBody);
        values.newMessageBody = ""
    };

    return (
        <main className={styles.dialogues}>
            <div className={styles.people}>
                {allPeople}
            </div>

            <div className={styles.messages}>
                {allMessages}

            </div>
            <SendMessageArea addNewMessage={addNewMessage}/>
        </main>
    )
};

export default Dialogs;