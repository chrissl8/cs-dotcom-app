import React from "react";
import classes from "./BackButton.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const backButton = (props) => {
    
    let linkTo;

    if(props.to === "" || props.to === null || props.to === undefined) {
        linkTo = "/";
    }
    else {
        linkTo = "/" + props.to;
    }

    return (
        <Link to={linkTo}>
            <div className={classes.BackButton} title="Go Back">
                <FontAwesomeIcon size="3x" icon={faArrowLeft} />
            </div>
        </Link>
    )
};

export default backButton;