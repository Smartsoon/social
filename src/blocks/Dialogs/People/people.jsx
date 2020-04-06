import React from "react";
import styles from './people.module.css';
import {NavLink} from "react-router-dom";

const People = ({peopleData}) => {

    return (
        <div className={styles.people}>
            {peopleData.map(dialog => <NavLink className={styles.singlePeople} activeClassName={styles.active}
                                               key={dialog.id}
                                               to={`/messages/${dialog.id}`}>{dialog.name}</NavLink>)}

        </div>
    )

};

export default People;