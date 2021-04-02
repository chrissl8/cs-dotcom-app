import React from "react";
import classes from './InfoPanelItem.module.css';

const infoPanelItem = (props) => (
    <React.Fragment>
        <h3><code className={classes.InfoPanelItemHeaderText}>&gt;{props.title}<span className={classes.Blink}>_</span></code></h3>
        <p>{props.description}</p>
    </React.Fragment>
);

export default infoPanelItem;