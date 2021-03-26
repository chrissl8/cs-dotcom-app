import React from "react";
import classes from './EducationItem.module.css';

const educationItem = (props) => {

    return (
        <div className={classes.EducationItem}>
            <p><strong>{props.institution}</strong>: <i>{props.program}</i></p>
            <p>{props.date}</p>
            <p>{props.comment}</p>
        </div>
    )
};

export default educationItem;