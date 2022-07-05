import React from 'react';
import classes from './input.module.css';

const Input = React.forwardRef(({error, ...props}, ref) => {
    return (
        <input className={classes.inp + ' ' + (error ? classes.error : null)} {...props}></input>
    );
});

export default Input;