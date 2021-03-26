import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import ResumeItems from '../../components/Resume/ResumeItems/ResumeItems';

class Resume extends Component {

  render() {

    return (
      <div>
        <HomeButton />
        <PageTitleText text="Resume"/>
        <ResumeItems />
      </div>
    );
  }
}

export default Resume;
