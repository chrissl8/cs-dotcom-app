import React, { useState, useEffect } from "react";
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSetName from '../../../constants/DataSetName/DataSetName';
import Spinner from '../../../../shared-components/Spinner/Spinner';
import classes from './PrintableEducation.module.css';

const PrintableEducation = (props) => {

    const [eduData, setEduData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEduData = async () => {
        const data = await fetchJSONDataFromDB(DataSetName.EDUCATION);
        setEduData(data.education);
        setLoading(false);
    };

    useEffect(() => {
        fetchEduData();
    },[]);

    return (
        <div>
            {loading ? <Spinner /> : null}
            {!loading && <div className={classes.PrintableEducation}>
            <h1>Education &amp; Certifications</h1>
            {eduData.map((item) => (
                <div key={item.rank}>
                    <p><strong>{item.institution}</strong> <i>{item.program} ({item.date})</i>: {item.comment}</p>
                    <p></p>
                </div>
            ))}
            </div>
            }
        </div>
    )
};

export default PrintableEducation;