import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} onClick={props.clicked}>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/resume">Resume</NavigationItem>
    <NavigationItem link="/portfolio">Portfolio</NavigationItem>
    <NavigationItem link="/apps">Apps</NavigationItem>
    <NavigationItem link="/photography">Photography</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
