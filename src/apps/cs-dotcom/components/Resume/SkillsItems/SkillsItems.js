import React, { useState, useEffect } from "react";
import classes from './SkillsItems.module.css';
import skillsJSONData from './../../../assets/data/skills.json';
import SkillsItem from './../SkillsItem/SkillsItem';
import * as DataSource from '../../../constants/DataSource/DataSource';
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSetName from './../../../constants/DataSetName/DataSetName';
import Spinner from '../../../../shared-components/Spinner/Spinner';

const SkillsItems = (props) => {
    
    const [skillsData, setSkillsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSkills = async () => {
        const skillsData = await fetchJSONDataFromDB(DataSetName.SKILLS);
        setSkillsData(skillsData.skills);
        setLoading(false);
    };

    useEffect(() => {
        fetchSkills();
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
        <React.Fragment>
            {loading ? <Spinner /> : null}
            {!loading && <div className={classes.SkillsItems}>
            {skillsDataObject.map((skill) => (
                <SkillsItem 
                key={skill.rank}
                skill={skill.skill}
                level={skill.level}
                />
            ))}
            </div>}
        </React.Fragment>
    )
};

export default SkillsItems;



