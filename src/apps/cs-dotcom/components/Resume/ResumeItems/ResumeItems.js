import React, { Component } from "react";
import classes from './ResumeItems.module.css';
import ResumeItem from './../ResumeItem/ResumeItem';
import resumeData from './../../../assets/data/resume.json';

class ResumeItems extends Component {

    render() {

        return(
            <div className={classes.ResumeItems}>
                {resumeData.map((resumeEntry) => (
                    <ResumeItem 
                        key={resumeEntry.rank}
                        company={resumeEntry.company}
                        jobTitle={resumeEntry.jobTitle}
                        location={resumeEntry.location}
                        jobStart={resumeEntry.jobStart}
                        jobEnd={resumeEntry.jobEnd}
                        jobDescription={resumeEntry.jobDescription}
                    />
                ))}
                
            </div>
        )
    }
}

export default ResumeItems;