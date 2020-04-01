import React from "react";
import styles from './navmenu.module.css';
import {NavLink} from "react-router-dom";


const NavigationMenu = (props) => {

    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={styles.nav_wall} activeClassName={styles.active}>Стена</NavLink>
            <NavLink to="/messages" className={styles.nav_message} activeClassName={styles.active}>Сообщения</NavLink>
            <NavLink to="/friends" className={styles.nav_friends} activeClassName={styles.active}>Друзья</NavLink>
            <NavLink to="/music" className={styles.nav_audio} activeClassName={styles.active}>Аудио</NavLink>
            <NavLink to="/settings" className={styles.nav_settings} activeClassName={styles.active}>Настройки</NavLink>
        </nav>
    );
};

export default NavigationMenu;