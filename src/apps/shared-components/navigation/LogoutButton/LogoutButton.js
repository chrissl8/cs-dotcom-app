import React from "react";
import classes from "./LogoutButton.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const logoutButton = (props) => (
        <div className={classes.LogoutButton} onClick={props.onClick} title="Sign Out">
            <FontAwesomeIcon size="3x" icon={faSignOutAlt} />
        </div>
);

export default logoutButton;