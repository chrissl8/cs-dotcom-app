import React, { useState, useEffect } from "react";
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSetName from '../../../constants/DataSetName/DataSetName';
import Spinner from '../../../../shared-components/Spinner/Spinner';
import classes from './PrintableSkills.module.css';

const PrintableSkills = (props) => {

    const [skillsData, setSkillsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSkillsData = async () => {
        const data = await fetchJSONDataFromDB(DataSetName.SKILLS);
        setSkillsData(data.skills);
        setLoading(false);
    };

    useEffect(() => {
        fetchSkillsData();
    },[]);

    return (
        <div>
            {loading ? <Spinner /> : null}
            {!loading && <div className={classes.PrintableSkills}>
            <h1>Skills &amp; Expertise</h1>
                <ul>
                {skillsData.map((item) => (
                    <li key={item.rank}>{item.skill}</li>
                ))}
                </ul>
            </div>
            }
        </div>
    )
};

export default PrintableSkills;