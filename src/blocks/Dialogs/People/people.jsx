import React from "react";
import styles from './people.module.css';
import {NavLink} from "react-router-dom";

const People = ({id, name}) => {
    return (
        <div className={styles.people}>
            <NavLink activeClassName={styles.active} to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )

};

export default People;