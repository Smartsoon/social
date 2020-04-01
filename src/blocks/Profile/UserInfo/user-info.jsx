import React from "react";
import styles from "./user-info.module.css";
import Preloader from "../../common/Preloader/preloader";
import worker from "../../../img/161-512.png";
import searchForAJob from "../../../img/resume.png";
import insta from "../../../img/insta.png";
import facebook from "../../../img/facebook.png";
import twitter from "../../../img/twitter.png";
import github from "../../../img/unnamed.png";
// import UserStatus from "./UserStatus/user-status.jsx"
import UserStatusHook from "./UserStatus/user-status-hook.jsx"

const UserInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else return (

        <div>
            <div className={styles.profile_userInfo}>
                <p className={styles.profile_userInfo_name}>{props.profile.fullName}</p>
                <UserStatusHook statusText={props.statusText} userId={props.profile.userId} id={props.id} setUserStatus={props.setUserStatus} aboutMe={props.profile.aboutMe}/>
                <div className={styles.workStatus_wrapper}>
                    <img className={styles.workStatus} title={props.profile.lookingForAJobDescription} src={props.profile.lookingForAJob ? searchForAJob : worker}
                         alt=""/>
                    <div className={styles.contacts_wrapper}>
                        <a href={props.profile.contacts.facebook}> <img className={styles.userInfo_contacts}
                                                                        src={facebook}/> </a>
                        <a href={props.profile.contacts.github}><img className={styles.userInfo_contacts} src={github}/></a>
                        <a href={props.profile.contacts.twitter}><img className={styles.userInfo_contacts}
                                                                      src={twitter}/></a>
                        <a href={props.profile.contacts.instagram}><img className={styles.userInfo_contacts}
                                                                        src={insta}/></a>
                    </div>
                </div>

            </div>

                <img className={styles.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : "https://kupi.cn.ua/theme/img/admin/noava.png"} alt=""/>



        </div>
    )


};

export default UserInfo;