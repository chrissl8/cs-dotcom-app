import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import ResumeItems from '../../components/Resume/ResumeItems/ResumeItems';
import * as DataSource from './../../constants/DataSource/DataSource';

class Resume extends Component {

  componentDidMount() {
    document.title = 'ChrisSlaight.com | Resume';
  }

  render() {

    return (
      <div>
        <HomeButton />
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
