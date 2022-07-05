import React from 'react';
import Input from "./UI/input/input";
import Button from "./UI/button/button";
import classes from './PostForm.module.css'

let PostForm = ({createPost}) => {
    const [post, setPost] = React.useState({title: '', description: ''});
    const [error, setError] = React.useState(false);

    const addNewPost = (e) => {
        e.preventDefault();
        if (!post.title.trim() || !post.description.trim()) {
            setError(true);
            return;
        } else {
            setError(false);
        }

        createPost({...post, date: new Date().toLocaleDateString()});
        setPost({title:'', description:''});
    }

    return (
        <form className={error ? classes.error : ''}>
            <Input type="text" error={error} placeholder="Text title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
            <Input type="text" error={error} placeholder="Text description" value={post.description} onChange={e => setPost({...post, description: e.target.value})}/>
            <p className={classes.error_message}>{error ? 'Title and description are required' : ''}</p>
            <Button onClick={addNewPost}>Add post</Button>
        </form>
    );
}

export default PostForm;