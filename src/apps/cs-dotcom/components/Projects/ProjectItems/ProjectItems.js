import React, { Component } from "react";
import classes from './ProjectItems.module.css';
import ProjectItem from './../ProjectItem/ProjectItem';
import projectData from './../../../assets/data/projects.json';


class ProjectItems extends Component {

    render() {
        return (
        <div className={classes.ProjectItems}>
            {projectData.map((projectEntry) => (
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