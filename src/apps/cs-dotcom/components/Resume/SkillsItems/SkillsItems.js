import React from "react";
import classes from './SkillsItems.module.css';
import skills from './../../../assets/data/skills.json';

const skillsItems = () => (
    <div className={classes.SkillsItems}>
        {skills.map((skill) => (
            <span key={skill.rank}><code>{skill.skill}</code></span>
        ))}
    </div>
);

export default skillsItems;



