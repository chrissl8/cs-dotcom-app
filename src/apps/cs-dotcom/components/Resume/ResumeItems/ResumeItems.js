import React, { Component } from "react";
import classes from './ResumeItems.module.css';
import ResumeItem from './../ResumeItem/ResumeItem';
import resumeJSONData from './../../../assets/data/resume.json';
import EducationItem from './../EducationItem/EducationItem';
import educationData from './../../../assets/data/education.json';
import SkillsItems from './../SkillsItems/SkillsItems';
import axios from 'axios';
import * as DataSource from '../../DataSource/DataSource';

class ResumeItems extends Component {

state = {
    dbResumeData: [],
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
  }

    render() {

        let employmentDataSource = null;
        switch(this.props.employmentDataSource) {
            case DataSource.JSON:
                employmentDataSource = resumeJSONData.resume;
            break;
            case DataSource.DATABASE:
                employmentDataSource = this.state.dbResumeData;
            break;
            default: 
                employmentDataSource = resumeJSONData;
        }

        return(
            <div className={classes.ResumeItems}>
                <h2>Employment</h2>
                {employmentDataSource.map((resumeEntry) => (
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