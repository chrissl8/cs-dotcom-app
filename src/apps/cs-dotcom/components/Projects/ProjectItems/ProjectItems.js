import React, { Component } from "react";
import classes from './ProjectItems.module.css';
import ProjectItem from './../ProjectItem/ProjectItem';
import projectJSONData from './../../../assets/data/projects.json';
import * as DataSource from './../../DataSource/DataSource';
import axios from 'axios';


class ProjectItems extends Component {

    state = {
        dbProjectsData: [],
      }
    
    componentDidMount() {
        axios
            .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/projects.json`)
            .then((res) => {
            this.setState({ dbProjectsData: res.data.projects });
            })
            .catch((err) => {
            console.log(err);
            });
    }

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