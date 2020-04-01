import React from "react";
import styles from "./post.module.css";
import {AddPostArea} from "./AddNewPostArea/add-new-post";

const Posts = React.memo(({addPost, postsData}) => {

    return (<div>

            <AddPostArea addPost={addPost}/>

            <div className={styles.messagesContent}>
                {postsData.map(post =>
                    <div key={post.id} className={styles.message}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                            alt="" className={styles.avatar}/>
                        <p className={styles.mesContent}>{post.post}</p>
                        <div className={styles.like}>
                            <button className={styles.likeBtn}>Like</button>
                            <span>{post.likes}</span>
                        </div>
                    </div>
                ).reverse()}
            </div>
        </div>
    )
});

export default Posts;