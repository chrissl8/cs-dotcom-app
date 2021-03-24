import React from "react";
import { Link } from "react-router-dom";
import classes from "./TileCard.module.css";
import me_beard from "./../../../assets/images/me_beard.jpg";
import aesthetic from "./../../../assets/images/aesthetic.jpg";
import nyc from "./../../../assets/images/nyc.jpg";
import underpass from "./../../../assets/images/underpass.jpg";
import clouds from "./../../../assets/images/clouds.jpg";
import parkway from "./../../../assets/images/parkway.jpg";

const tileCard = (props) => {

    let selectedImage = null;
    switch(props.image) {
        case 'me_beard': selectedImage = me_beard; break;
        case 'aesthetic': selectedImage = aesthetic; break;
        case 'nyc': selectedImage = nyc; break;
        case 'underpass': selectedImage = underpass; break;
        case 'clouds': selectedImage = clouds; break;
        case 'parkway': selectedImage = parkway; break;
        default: selectedImage = me_beard;
    }

    return (
        <Link to={props.page}>
            <div className={classes.TitleCard}>
                <img src={selectedImage} alt={props.image}/>
                <div className={classes.CardText}><h2>{props.title}</h2></div>
            </div>
        </Link>
        )
    };

export default tileCard;