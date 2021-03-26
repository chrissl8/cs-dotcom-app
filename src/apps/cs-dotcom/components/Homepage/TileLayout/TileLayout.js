import React from "react";
import classes from "./TileLayout.module.css";
import TileCard from './../TileCard/TileCard'

const tileLayout = (props) => (
  <div className={classes.TileLayout}>
    <div className={classes.Row}>
      <div className={classes.Column}><TileCard image="me_beard" page=""/></div>
      <div className={classes.Column}><TileCard title="Resume" image="nyc" page="resume"/></div>
    </div>
    <div className={classes.Row}>
      <div className={classes.Column}><TileCard title="Projects" image="aesthetic" page="projects"/></div>
      <div className={classes.Column}><TileCard title="Apps" image="clouds" page="apps"/></div>
    </div>
    <div className={classes.Row}>
      <div className={classes.Column}><TileCard title="Photography" image="parkway" page="photography"/></div>
      <div className={classes.Column}><TileCard title="Contact" image="underpass" page="contact"/></div>
    </div>
  </div>
);

export default tileLayout;
