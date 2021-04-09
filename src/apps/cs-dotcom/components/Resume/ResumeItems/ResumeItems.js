import React, { Component } from "react";
import classes from './ResumeItems.module.css';
import ResumeItem from './../ResumeItem/ResumeItem';
import resumeJSONData from './../../../assets/data/resume.json';
import EducationItem from './../EducationItem/EducationItem';
import educationJSONData from './../../../assets/data/education.json';
import SkillsItems from './../SkillsItems/SkillsItems';
import axios from 'axios';
import * as DataSource from '../../DataSource/DataSource';

class ResumeItems extends Component {

state = {
    dbResumeData: [],
    dbEducationData: []
  }

  componentDidMount() {
    axios
      .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/resume.json`)
      .then((res) => {
        this.setState({ dbResumeData: res.data.resume });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/education.json`)
      .then((res) => {
        this.setState({ dbEducationData: res.data.education });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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