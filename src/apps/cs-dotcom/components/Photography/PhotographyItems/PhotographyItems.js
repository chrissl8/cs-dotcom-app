import React, { Component } from "react";
import classes from './PhotographyItems.module.css';
import PhotographyItem from './../PhotographyItem/PhotographyItem';


class PhotographyItems extends Component {

    render() {
        return (
        <div className={classes.PhotographyItems}>
            <PhotographyItem 
                name="Transitpics.com Archive"
                description="An archive of my transit photography website from the mid-'00s, Transitpics.com"
                url="https://chrisslaight.com/transitpics/"
            />
        </div>
        )
    }
}

export default PhotographyItems;