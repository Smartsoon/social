import styles from "../dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../../utils/formsControls/text-input";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
const newMessageArea = FormControl("textarea");

let maxLength = maxLengthCreator(200);

const SendMessageAreaForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.messageInput}>
            <div className={styles.messageArea}>
                <Field validate={[requiredField, maxLength]}
                       component={newMessageArea}
                       name="newMessageBody"
                       placeholder="Введите сообщение..."
                       >
                </Field>
            </div>
            <div>
                <button className={styles.sendMessageBtn}>Отправить</button>
            </div>
        </form>
    )
};

const ReduxSendMessageArea = reduxForm({form: "addMessageForm"})(SendMessageAreaForm);

export const SendMessageArea = ({addNewMessage}) => {
    return (
        <div>
            <ReduxSendMessageArea onSubmit={addNewMessage}/>
        </div>
    )
};





