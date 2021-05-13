import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import PrintButton from '../../../shared-components/navigation/PrintButton/PrintButton';
import ResumeItems from '../../components/Resume/ResumeItems/ResumeItems';
import * as DataSource from './../../constants/DataSource/DataSource';
import classes from './Resume.module.css';

class Resume extends Component {

  componentDidMount() {
    document.title = 'ChrisSlaight.com | Resume';
  }

  render() {

    return (
      <div>
        <HomeButton />
        <div className={classes.PrintButtonResponsiveToggle}><PrintButton type="nav"/></div>
        <PageTitleText text="Resume"/>
        <ResumeItems 
          employmentDataSource={DataSource.DATABASE}
          educationDataSource={DataSource.DATABASE}
        />
      </div>
    );
  }
}

export default Resume;
