import React from "react";
import classes from './ProjectItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projectItem = (props) => (
    <div className={classes.ProjectItem}>
        <p><strong>{props.name}</strong></p>
        <p><i>{props.description}</i></p>
        {props.url && <div><a href={props.url} target="blank">
            <FontAwesomeIcon size="1x" icon={faExternalLinkAlt} /> View</a>
        </div>}
    </div>
    );

export default projectItem;