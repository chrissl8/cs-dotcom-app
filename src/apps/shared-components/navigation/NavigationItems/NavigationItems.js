import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCamera, faPaperclip, faFolder, faEnvelope, faCode, faUser} from '@fortawesome/free-solid-svg-icons';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} onClick={props.clicked}>
    <NavigationItem link="/" exact>
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faHome} /> Home
    </NavigationItem>
    <NavigationItem link="/resume">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faPaperclip} /> Resume</NavigationItem>
    <NavigationItem link="/projects">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faFolder} /> Projects</NavigationItem>
    <NavigationItem link="/apps">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faCode} /> Apps</NavigationItem>
    <NavigationItem link="/photography">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faCamera} /> Photography</NavigationItem>
    <NavigationItem link="/contact">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faEnvelope} /> Contact</NavigationItem>
    <NavigationItem link="/admin">
      <FontAwesomeIcon color="#24cc44" size="1x" icon={faUser} /> Admin</NavigationItem>
  </ul>
);

export default navigationItems;
