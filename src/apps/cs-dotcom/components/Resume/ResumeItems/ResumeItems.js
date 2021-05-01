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
import Spinner from '../../../../shared-components/Spinner/Spinner';

class ResumeItems extends Component {

    state = {
        dbResumeData: [],
        dbEducationData: [],
        employmentLoading: true,
        educationLoading: true
    }

    fetchResume = async () => {
        const resumeData = await fetchJSONDataFromDB(DataSetName.RESUME);
        this.setState({dbResumeData: resumeData.resume, employmentLoading: false});
    };

    fetchEducation = async () => {
        const educationData = await fetchJSONDataFromDB(DataSetName.EDUCATION);
        this.setState({dbEducationData: educationData.education, educationLoading: false});
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
                <div className={classes.ResumeItemColumn}>
                    <h2>Employment</h2>
                    {this.state.employmentLoading ? <Spinner /> : null}
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
                </div>
                <div className={classes.ResumeItemColumn}>
                    <h2>Skills &amp; Expertise</h2>
                    <SkillsItems skillsDataSource={DataSource.DATABASE}/>
                </div>
                <div className={classes.ResumeItemColumn}>
                    <h2>Education &amp; Certifications</h2>
                    {this.state.educationLoading ? <Spinner /> : null}
                    {educationDataObject.map((educationEntry) => (
                        <EducationItem 
                            key={educationEntry.rank}
                            institution={educationEntry.institution}
                            program={educationEntry.program}
                            date={educationEntry.date}
                            comment={educationEntry.comment}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default ResumeItems;