import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const photographyItem = (props) => (
    <div className="Card">
        <p><strong>{props.name}</strong> <i>{props.description}</i></p>
        <div><a href={props.url} target="blank"><FontAwesomeIcon color="#24cc44" size="1x" icon={faExternalLinkAlt} /> Visit Website</a></div>
    </div>
    );

export default photographyItem;