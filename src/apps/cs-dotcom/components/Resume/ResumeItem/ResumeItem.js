import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMapMarked} from '@fortawesome/free-solid-svg-icons';

const resumeItem = (props) => {

    const descriptionItems = props.jobDescription.map((desc) => (
    <li key={desc}>{desc}</li> 
    )
  );

    return (
        <div className="Card">
            <p><strong>{props.company}</strong> <i>{props.jobTitle}</i><br/>
            <FontAwesomeIcon color="#24cc44" size="1x" icon={faMapMarked} /> {props.location}<br/>
            <FontAwesomeIcon color="#24cc44" size="1x" icon={faCalendar} /> {props.jobStart} - {props.jobEnd}</p> 
            <ul>
                {descriptionItems}
            </ul>           
        </div>
    )
};

export default resumeItem;