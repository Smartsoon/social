import styles from "./user-status.module.css";
import React, {useEffect, useState} from "react";


const UserStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.statusText);

    const setStatusModeEdit = () => {
        if (props.id === props.userId) {
            setEditMode(true)
            }
    };

    useEffect(() => {
        setStatus(props.statusText)
    }, [props.statusText]);

    const setStatusModeApprove = () => {
        setEditMode(false);
        props.setUserStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };



        return (
            <div className={styles.userInfo_status_wrapper}>
                {
                    !editMode ?
                        <div>
                            <span onDoubleClick={setStatusModeEdit}
                                  className={styles.userInfo_status}>{!props.statusText ? "Статус отсутствует" : `"${props.statusText}"`}</span>
                        </div> :
                        <div>
                            <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={setStatusModeApprove} type="text"/>
                        </div>
                }
            </div>
        )

};

export default UserStatusHook;