import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faMapMarkerAlt, faCode} from '@fortawesome/free-solid-svg-icons';

const infoPanelItem = (props) => {

    let selectedIcon = null;
    switch(props.icon) {
        case 'faCode': selectedIcon = faCode; break;
        case 'faUserAlt': selectedIcon = faUserAlt; break;
        case 'faMapMarkerAlt': selectedIcon = faMapMarkerAlt; break;
        default: selectedIcon = faUserAlt;
    }

    return (
        <React.Fragment>
            <h3><FontAwesomeIcon size="1x" icon={selectedIcon} /></h3>
            <p>{props.description}</p>
        </React.Fragment>
    );
};

export default infoPanelItem;