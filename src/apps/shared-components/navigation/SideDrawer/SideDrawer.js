import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "./../Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems clicked={props.closed} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
