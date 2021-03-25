import React from "react";
import classes from './ResumeItem.module.css';

const resumeItem = (props) => {

    const descriptionItems = props.jobDescription.map((desc) => (
    <li key={Math.random()}>{desc}</li> 
    )
  );

    return (
        <div className={classes.ResumeItem}>
            <p className={classes.ResumeItemTitle}><strong>{props.company}</strong>: <i>{props.jobTitle}</i></p>
            <p className={classes.ResumeItemMeta}>{props.location} &#183; {props.jobStart} - {props.jobEnd}</p> 
            <ul>
                {descriptionItems}
            </ul>           
        </div>
    )
};

export default resumeItem;