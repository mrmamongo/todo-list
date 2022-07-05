import React from "react";
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

let PostList = ({name, posts, deletePost}) => {
    return (<div className={'posts'}>
        <h1 className={classes.post_name}>Posts</h1>
        <div className={classes.posts_list}>
        {posts.map((post, index) => (
            <PostItem key={index} title={post.title} description={post.description} date={post.date} onClick={() => {
                deletePost(index)
            }}/>
        ))}
        </div>
    </div>);
}

export default PostList;