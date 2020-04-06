import React from "react";
import styles from "../friends.module.css";


const MyFriends = ({friendsData, unFollowTC, isSendFriendRequest}) => {

    return(
        <div >
            <div className={styles.myFriends}>
                {friendsData.map(friend =>
                    <div className={styles.friend} key={friend.id}>
                        <div>
                            <img className={styles.avatar} alt=""
                                 src={friend.photos.small != null ? friend.avatar : "https://kupi.cn.ua/theme/img/admin/noava.png"}/>
                        </div>
                        <div className={styles.friendInfo}>
                            <div className={styles.nameInfo}>
                    <span>
                    {friend.name}
                    </span>
                            </div>
                            <div className={styles.locationInfo}>
                                <div>
                    <span>
                    {`Страна:}`}
                    </span>
                                </div>
                                <div>
                    <span>
                    {`Город: `}
                    </span>
                                </div>
                                <div>
                                    <button className={styles.followBtn}
                                            disabled={isSendFriendRequest.some(id => id === friend.id)}
                                            onClick={() => {
                                                unFollowTC(friend.id)}}>Unfollow</button>
                                </div>
                            </div>
                        </div>

                    </div>)}
            </div>
        </div>
    )
};

export default MyFriends;