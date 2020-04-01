import React from "react";
import styles from "../header.module.css";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../../utils/formsControls/text-input";
import {requiredField} from "../../../utils/validators/validator";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form className={styles.loginBlock} onSubmit={props.handleSubmit}>

            <div>
                <Field component={FormControl("input")}
                       placeholder={"Введите логин..."}
                       className={styles.loginInputs}
                       name="email"
                       validate={requiredField}/>
            </div>

            <div>
                <Field validate={requiredField}
                       component={FormControl("input")}
                       placeholder={"Введите пароль..."}
                       className={styles.loginInputs}
                       name="password"
                       type={"password"}/>
            </div>

            <div>
                <div className={styles.center}>
                    <Field component={"input"} className={styles.loginCheckBox} title="Запомнить" name="rememberMe"
                           type={"checkbox"}/>
                </div>
            </div>

            <div>
                <button className={styles.login}>Войти</button>
            </div>

            {/*<div>*/}
            {/*    <button className={styles.register}>Регистрация</button>*/}
            {/*</div>*/}
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.doLogin(formData.email, formData.password, formData.rememberMe);
    };

    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
};