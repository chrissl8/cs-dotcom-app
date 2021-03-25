import React from "react";
import classes from "./DrawerToggle.module.css";
import menuIcon from './../../../../cs-dotcom/assets/icons/menu_transparent.png'

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <img src={menuIcon} alt="Menu" />
  </div>
);

export default drawerToggle;
