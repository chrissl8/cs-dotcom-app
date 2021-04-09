import React, { Component } from "react";
import PageTitleText from '../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import ProjectItems from '../../components/Projects/ProjectItems/ProjectItems'
import * as DataSource from './../../components/DataSource/DataSource'

class Projects extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Projects"/>
        <ProjectItems projectsDataSource={DataSource.DATABASE}/>
      </div>
    );
  }
}

export default Projects;
