import React, { Component } from "react";
import classes from './ResumeItems.module.css';
import ResumeItem from './../ResumeItem/ResumeItem';
import resumeData from './../../../assets/data/resume.json';
import EducationItem from './../EducationItem/EducationItem';
import educationData from './../../../assets/data/education.json';
import SkillsItems from './../SkillsItems/SkillsItems';

class ResumeItems extends Component {

    render() {

        return(
            <div className={classes.ResumeItems}>
                <h2>Employment</h2>
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
                <h2>Education &amp; Certifications</h2>
                {educationData.map((educationEntry) => (
                    <EducationItem 
                        key={educationEntry.rank}
                        institution={educationEntry.institution}
                        program={educationEntry.program}
                        date={educationEntry.date}
                        comment={educationEntry.comment}
                    />
                ))}
                <h2>Skills &amp; Expertise</h2>
                <SkillsItems />
            </div>
        )
    }
}

export default ResumeItems;