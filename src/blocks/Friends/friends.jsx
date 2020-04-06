import React from "react";
import styles from "./friends.module.css"
import Users from "./Users/users";
import MyFriends from "./MyFriends/my-friends";


const Friends = ({
                     totalUsersCount, pageSize, selectedPage, users, friendsData,
                     isSendFriendRequest, onPageChanged, unFollowTC, followTC, portionSize
                 }) => {

    return (

        <div className={styles.friends}>

            <Users totalUsersCount={totalUsersCount} pageSize={pageSize} selectedPage={selectedPage}
                   users={users} onPageChanged={onPageChanged} followTC={followTC} portionSize={portionSize}
                   unFollowTC={unFollowTC} isSendFriendRequest={isSendFriendRequest}/>

            <MyFriends friendsData={friendsData} unFollowTC={unFollowTC} isSendFriendRequest={isSendFriendRequest}/>
        </div>
    )
};

export default Friends;