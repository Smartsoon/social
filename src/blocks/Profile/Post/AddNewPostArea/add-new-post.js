import styles from "../post.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validator"
import {FormControl} from "../../../../utils/formsControls/text-input";

const maxLength = maxLengthCreator(10);

const SendNewPostAreaForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.createWallMessage}>
            <div className={styles.WallMessageArea}>
                <Field
                    component={FormControl("textarea")}
                       name="newPostBody"
                       placeholder="Введите сообщение..."
                       validate={[requiredField, maxLength]}>
                </Field>
            </div>
            <div>
                <button className={styles.submitWallMessage}>Отправить</button>
            </div>
        </form>
    )
};

const ReduxSendNewPostArea = reduxForm({form: "addPostForm"})(SendNewPostAreaForm);

export const AddPostArea = (props) => {
    return (
        <div>
            <ReduxSendNewPostArea onSubmit={props.addPost}/>
        </div>
    )
};