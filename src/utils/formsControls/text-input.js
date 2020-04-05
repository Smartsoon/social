import React from "react";
import styles from "../../blocks/Profile/Post/post.module.css";


export const FormControl = Element => ({input, meta, ...props}) => {
    const errorRules = meta.touched && meta.error;
    return (
            <div>
                <Element {...input} {...props} className={(errorRules ? styles.error : "")}/>
                {errorRules && <span>{meta.error}</span>}
            </div>
        )
};