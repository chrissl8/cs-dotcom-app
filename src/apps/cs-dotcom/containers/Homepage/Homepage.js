import React, { Component } from "react";
import classes from "./Homepage.module.css";
import InfoPanel from '../../components/Homepage/InfoPanel/InfoPanel';
import TileLayout from '../../components/Homepage/TileLayout/TileLayout'

class Homepage extends Component {
  render() {
    return (
      <div className={classes.Homepage}>
        <InfoPanel />
        <TileLayout />
      </div>
    );
  }
}

export default Homepage;
