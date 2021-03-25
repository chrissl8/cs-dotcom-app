import React from "react";
import classes from "./PageTitleText.module.css";

const pageTitleText= (props) => {

    return(
        <div className={!props.title ? classes.ResponsivePageTitle : ""}>
            <h1>Chris Slaight <code className={classes.SubHeaderText}>&gt;{props.text}<span className={classes.Blink}>_</span></code></h1>
        </div>
    )
};

export default pageTitleText;