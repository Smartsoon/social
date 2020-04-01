import React from "react";
import styles from "./register.module.css";
import {Redirect} from "react-router-dom";

const Register = (props) => {

    if (props.isLoggedIn) {

        return <Redirect to="/profile"/>
    }

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.infoBlock}>
            <a className={styles.registerLink} href="https://social-network.samuraijs.com/login">Регистрируемся по ссылке</a>
                <p>Если вы уже зарегистрированы, авторизуйтесь выше</p>
            </div>
        </div>
    )
};

export default Register;