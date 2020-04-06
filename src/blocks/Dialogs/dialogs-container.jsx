import React from "react";
import styles from './dialogs.module.css'
import People from "./People/people.jsx";
import Messages from "./Messages/messages.jsx";
import {SendMessageArea} from "./SendMessageArea/send-message-area.jsx";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import withRegisterRedirect from "../../HOC/app-hoc";


const DialogsC = ({peopleData, messagesData, sendNewMessage}) => {

    let addNewMessage = (values) => {
        if (values.newMessageBody === undefined) {
            return
        }
        sendNewMessage(values.newMessageBody);
        values.newMessageBody = ""
    };

    return (
        <main className={styles.dialogues}>
            <div>
                <People peopleData={peopleData}/>
            </div>

            <div className={styles.messages}>
                <Messages messagesData={messagesData} />

            </div>
            <SendMessageArea addNewMessage={addNewMessage}/>
        </main>
    )
};


const mapStateToProps = (state) => {
    return {
        peopleData: state.dialogsPage.peopleData,
        messagesData: state.dialogsPage.messagesData,
        typedMessage: state.dialogsPage.typedMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (message) => {
            let action = addMessageAC(message);
            dispatch(action);
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRegisterRedirect)
(DialogsC);