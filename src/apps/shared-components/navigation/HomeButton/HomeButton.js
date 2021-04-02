import React from "react";
import classes from "./HomeButton.module.css";
import { Link } from "react-router-dom";
//import home from './../../../cs-dotcom/assets/icons/home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

const homeButton = () => (
    <Link to="/">
        <div className={classes.HomeButton}>
            {/* <img src={home} alt="Home" /> */}
            <FontAwesomeIcon size="3x" icon={faHome} />
        </div>
    </Link>
);

export default homeButton;