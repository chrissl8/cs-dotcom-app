import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

const educationItem = (props) => {

    return (
        <div className="Card">
            <p><strong>{props.institution}</strong> <i>{props.program}</i><br />
            <FontAwesomeIcon color="#24cc44" size="1x" icon={faCalendar} /> {props.date}</p>
            <p>{props.comment}</p>
        </div>
    )
};

export default educationItem;