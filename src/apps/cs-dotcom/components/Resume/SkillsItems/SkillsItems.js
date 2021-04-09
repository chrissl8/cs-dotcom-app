import React, { useState, useEffect } from "react";
import classes from './SkillsItems.module.css';
import skillsJSONData from './../../../assets/data/skills.json';
import SkillsItem from './../SkillsItem/SkillsItem';
import * as DataSource from './../../DataSource/DataSource';
import axios from 'axios';

const SkillsItems = (props) => {
    
    const [skillsData, setSkillsData] = useState([]);

    

    useEffect((skillsData) => {
        axios
            .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/skills.json`)
            .then((res) => {
                setSkillsData(res.data.skills);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    let skillsDataObject = null;
        switch(props.skillsDataSource) {
            case DataSource.JSON:
                skillsDataObject = skillsJSONData.skills;
            break;
            case DataSource.DATABASE:
                skillsDataObject = skillsData;
            break;
            default: 
                skillsDataObject = skillsJSONData.skills;
        }

    return (
        <div className={classes.SkillsItems}>
        {skillsDataObject.map((skill) => (
            <SkillsItem 
            key={skill.rank}
            skill={skill.skill}
            level={skill.level}
            />
        ))}
        </div>
    )
};

export default SkillsItems;



