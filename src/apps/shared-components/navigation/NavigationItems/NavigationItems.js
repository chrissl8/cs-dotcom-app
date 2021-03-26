import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCamera, faPaperclip, faFolder, faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} onClick={props.clicked}>
    <NavigationItem link="/" exact>
      <FontAwesomeIcon size="1x" icon={faHome} /> Home
    </NavigationItem>
    <NavigationItem link="/resume">
      <FontAwesomeIcon size="1x" icon={faPaperclip} /> Resume</NavigationItem>
    <NavigationItem link="/portfolio">
      <FontAwesomeIcon size="1x" icon={faFolder} /> Portfolio</NavigationItem>
    <NavigationItem link="/apps">
      <FontAwesomeIcon size="1x" icon={faCode} /> Apps</NavigationItem>
    <NavigationItem link="/photography">
      <FontAwesomeIcon size="1x" icon={faCamera} /> Photography</NavigationItem>
    <NavigationItem link="/contact">
      <FontAwesomeIcon size="1x" icon={faEnvelope} /> Contact</NavigationItem>
  </ul>
);

export default navigationItems;
