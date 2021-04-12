import React, { Component } from "react";
import PageTitleText from '../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import ProjectItems from '../../components/Projects/ProjectItems/ProjectItems'
import * as DataSource from './../../constants/DataSource/DataSource'

class Projects extends Component {

  componentDidMount() {
    document.title = 'ChrisSlaight.com | Projects';
  }

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
