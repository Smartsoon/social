import React, {useState} from "react";
import styles from "../friends.module.css";
import {NavLink} from "react-router-dom";
import defAvatar from "../../../img/defAva.jpg";


const Users = ({totalUsersCount, pageSize,
                   portionSize, isSendFriendRequest,
                   users, selectedPage, onPageChanged,
                   followTC, unFollowTC}) => {

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
        <div >
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
        </div>
    )
};

export default Users;


