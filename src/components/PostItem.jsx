import React from 'react';
import Button from "./UI/button/button";
import classes from './PostItem.module.css'

function PostItem({title, description, date, onClick}) {
    return (
        <div className={classes.post}>
            <h3 className={classes.date}>{date}</h3>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
            <Button style={{marginRight: '10px'}}>Read More</Button>
            <Button onClick={onClick}>Delete</Button>
        </div>
    );
}

export default PostItem;