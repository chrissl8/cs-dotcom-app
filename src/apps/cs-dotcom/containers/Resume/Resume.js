import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import ResumeItems from '../../components/Resume/ResumeItems/ResumeItems';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';

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
