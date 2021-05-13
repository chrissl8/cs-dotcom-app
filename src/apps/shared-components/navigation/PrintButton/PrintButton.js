import React from "react";
import classes from "./PrintButton.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const printButton = (props) => {

    let returnedButton = null;

    switch (props.type) {
        case 'nav': returnedButton = 
            <Link to="/printableresume">
                <div className={classes.PrintButton} title="Printable Version">
                    <FontAwesomeIcon size="3x" icon={faPrint} />
                </div>;
            </Link>;
        break;
        case 'print': returnedButton = 
            <div className={classes.PrintButton} title="Printable Version" onClick={() => window.print()}>
                <FontAwesomeIcon size="3x" icon={faPrint} />
            </div>;
        break;
        default: returnedButton = 
        <div className={classes.PrintButton} title="Printable Version" onClick={() => window.print()}>
            <FontAwesomeIcon size="3x" icon={faPrint} />
        </div>;
    }

    return returnedButton;
};

export default printButton;