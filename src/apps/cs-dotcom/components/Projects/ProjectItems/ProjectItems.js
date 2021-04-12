import React, { Component } from "react";
import classes from './ProjectItems.module.css';
import ProjectItem from './../ProjectItem/ProjectItem';
import projectJSONData from './../../../assets/data/projects.json';
import { fetchJSONDataFromDB } from './../../../utils/DatabaseAccess/DatabaseAccess';
import * as DataSource from './../../../constants/DataSource/DataSource';
import * as DataSetName from './../../../constants/DataSetName/DataSetName';


class ProjectItems extends Component {

    state = {
        dbProjectsData: [],
      }

    fetchProjects = async () => {
        const projectsData = await fetchJSONDataFromDB(DataSetName.PROJECTS);
        this.setState({dbProjectsData: projectsData.projects});
    };
    
    componentDidMount() {
        this.fetchProjects();
    };

    render() {

        let projectsDataObject = null;
        switch(this.props.projectsDataSource) {
            case DataSource.JSON:
                projectsDataObject = projectJSONData.projects;
            break;
            case DataSource.DATABASE:
                projectsDataObject = this.state.dbProjectsData;
            break;
            default: 
                projectsDataObject = projectJSONData.projects;
        }

        return (
        <div className={classes.ProjectItems}>
            {projectsDataObject.map((projectEntry) => (
                <ProjectItem 
                    key={projectEntry.rank}
                    name={projectEntry.name}
                    description={projectEntry.description}
                    url={projectEntry.url}
                />
            ))}
        </div>
        
        )
    }
}

export default ProjectItems;