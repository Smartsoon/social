import React, {useState} from "react";
import styles from "./friends.module.css"
import defAvatar from "../../img/defAva.jpg";
import {NavLink} from "react-router-dom";


const Friends = ({totalUsersCount, pageSize, selectedPage, users, friendsData,
                     isSendFriendRequest, onPageChanged, unFollowTC, followTC, portionSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pagesCountArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArray.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * (portionSize + 1);
    let rightPortionPageNumber = portionNumber * portionSize;


    return (

        <div className={styles.friends}>
            { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>↑</button> }
            <div className={styles.pagesBtns}>
                {pagesCountArray.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(pageNumber => {
                    return <p onClick={() => {
                        onPageChanged(pageNumber)
                    }} className={selectedPage === pageNumber ? styles.selectedPage : ''}>{pageNumber}</p>
                })}
                { portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>↓</button> }
            </div>

            <div className={styles.searchNewFriends}>

                {users.map(user =>
                    <div className={styles.user} key={user.id}>

                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={styles.avatar} alt=""
                                     src={user.photos.small != null ? user.photos.small : defAvatar}/>
                            </NavLink>
                        </div>

                        <div>
                                <span className={styles.name}>
                                    {user.name}
                                </span>
                        </div>
                        <div>
                            {user.followed ? <button className={styles.followBtn} key={user.id}
                                                     disabled={isSendFriendRequest.some(id => id === user.id)}
                                                     onClick={() => {
                                    unFollowTC(user.id)}}>Unfollow</button> :

                                <button className={styles.followBtn} key={user.id}
                                        disabled={isSendFriendRequest.some(id => id === user.id)}
                                        onClick={() => {
                                    followTC(user.id)}}>Follow</button>}
                        </div>


                    </div>
                )}
            </div>

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

export default Friends;