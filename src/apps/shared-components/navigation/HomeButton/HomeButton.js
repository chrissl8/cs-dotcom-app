import React from "react";
import classes from "./HomeButton.module.css";
import { Link } from "react-router-dom";
import home from './../../../cs-dotcom/assets/icons/home.png';

const homeButton = () => (
    <Link to="/">
        <div className={classes.HomeButton}>
            <img src={home} alt="Home" />
        </div>
    </Link>
);

export default homeButton;