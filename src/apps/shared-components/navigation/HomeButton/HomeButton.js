import React from "react";
import classes from "./HomeButton.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

const homeButton = () => (
    <Link to="/">
        <div className={classes.HomeButton} title="Home">
            <FontAwesomeIcon size="3x" icon={faHome} />
        </div>
    </Link>
);

export default homeButton;