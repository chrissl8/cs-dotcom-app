import React, { Component } from "react";
import classes from './ResumeItems.module.css';
import ResumeItem from './../ResumeItem/ResumeItem';
import resumeJSONData from './../../../assets/data/resume.json';
import EducationItem from './../EducationItem/EducationItem';
import educationJSONData from './../../../assets/data/education.json';
import SkillsItems from './../SkillsItems/SkillsItems';
import * as DataSource from '../../../constants/DataSource/DataSource';
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSetName from './../../../constants/DataSetName/DataSetName';

class ResumeItems extends Component {

    state = {
        dbResumeData: [],
        dbEducationData: []
    }

    fetchResume = async () => {
        const resumeData = await fetchJSONDataFromDB(DataSetName.RESUME);
        this.setState({dbResumeData: resumeData.resume});
    };

    fetchEducation = async () => {
        const educationData = await fetchJSONDataFromDB(DataSetName.EDUCATION);
        this.setState({dbEducationData: educationData.education});
    };

    componentDidMount() {
        this.fetchResume();
        this.fetchEducation();
    };

    render() {

        let employmentDataObject, educationDataObject = null;
        switch(this.props.employmentDataSource) {
            case DataSource.JSON:
                employmentDataObject = resumeJSONData.resume;
            break;
            case DataSource.DATABASE:
                employmentDataObject = this.state.dbResumeData;
            break;
            default: 
                employmentDataObject = resumeJSONData.resume;
        }
        switch(this.props.educationDataSource) {
            case DataSource.JSON:
                educationDataObject = educationJSONData.education;
            break;
            case DataSource.DATABASE:
                educationDataObject = this.state.dbEducationData;
            break;
            default: 
                educationDataObject = educationJSONData.education;
        }

        return(
            <div className={classes.ResumeItems}>
                <h2>Employment</h2>
                {employmentDataObject.map((resumeEntry) => (
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
                {educationDataObject.map((educationEntry) => (
                    <EducationItem 
                        key={educationEntry.rank}
                        institution={educationEntry.institution}
                        program={educationEntry.program}
                        date={educationEntry.date}
                        comment={educationEntry.comment}
                    />
                ))}
                <h2>Skills &amp; Expertise</h2>
                <SkillsItems skillsDataSource={DataSource.DATABASE}/>
            </div>
        )
    }
}

export default ResumeItems;