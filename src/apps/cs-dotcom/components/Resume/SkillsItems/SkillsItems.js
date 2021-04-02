import React from "react";
import classes from './SkillsItems.module.css';
import skills from './../../../assets/data/skills.json';
import SkillsItem from './../SkillsItem/SkillsItem'

const skillsItems = () => {
    

    return (
        <div className={classes.SkillsItems}>
        {skills.map((skill) => (
            <SkillsItem 
            key={skill.rank}
            skill={skill.skill}
            level={skill.level}
            />
        ))}
        </div>
    )
};

export default skillsItems;



