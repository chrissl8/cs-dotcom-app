import React from "react";
import classes from "./SkillsItem.module.css";

const skillsItem = (props) => {

    let levelClass = null;
    console.log(props);

    switch(props.level) {
        case '1':
            levelClass = classes.SkillsLevel1;
            break;
        case '2':
            levelClass = classes.SkillsLevel2;
            break;
        case '3':
            levelClass = classes.SkillsLevel3;
            break;
        default: 
            levelClass = classes.SkillsLevel3;
    }

    return (
        <div className={classes.SkillsItem.concat(" ", levelClass)}>
            <span key={props.rank}>
                <code>{props.skill}</code>
            </span>
        </div>
    )
};

export default skillsItem;