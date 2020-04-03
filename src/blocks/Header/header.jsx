import React from "react";
import styles from './header.module.css';
import avatarImg from "../../img/defAva.jpg";
import {Login} from "./Login/login";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="" alt=""/>

            {props.isLoggedIn ?
                <div className={styles.loginBlock}>
                    <a className={styles.headerLogin}>{props.login}</a>

                    <img className={styles.headerAvatar} src={`https://social-network.samuraijs.com/activecontent/images/users/${props.id}/user.jpg?v=7`} alt=""/>

                    <button onClick={props.logoutTC} className={styles.logout}>Выйти</button>

                </div> : null}
            {!props.isLoggedIn ?
                <div className={styles.loginBlock}>
                    <Login doLogin={props.doLogin} {...props}/>
                </div> : null
            }
        </header>
    );
};

export default Header;