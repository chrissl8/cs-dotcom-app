import React, { useState, useEffect } from "react";
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSetName from '../../../constants/DataSetName/DataSetName';
import Spinner from '../../../../shared-components/Spinner/Spinner';
import classes from './PrintableEmployment.module.css';

const PrintableEmployment = (props) => {

    const [empData, setEmpData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEmpData = async () => {
        const data = await fetchJSONDataFromDB(DataSetName.RESUME);
        setEmpData(data.resume);
        setLoading(false);
    };

    useEffect(() => {
        fetchEmpData();
    },[]);

    return (
        <div>
            {loading ? <Spinner /> : null}
            {!loading && <div className={classes.PrintableEmployment}>
            <h1>Employment</h1>
            {empData.map((item) => (
                <div key={item.rank}>
                    <p><strong>{item.company}</strong> {item.jobTitle}</p>
                    <p>{item.location}: {item.jobStart} - {item.jobEnd}</p>
                    <ul>
                        {item.jobDescription.map((desc) => (
                            <li key={desc}>{desc}</li> 
                            )
                        )}
                    </ul>
                </div>
            ))}
            </div>
            }
        </div>
    )
};

export default PrintableEmployment;