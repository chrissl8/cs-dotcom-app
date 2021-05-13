import React, { Component, Fragment} from "react";
import classes from "./PrintableResume.module.css";
import HomeButton from './../../../shared-components/navigation/HomeButton/HomeButton';
import PrintButton from './../../../shared-components/navigation/PrintButton/PrintButton';
import BackButton from './../../../shared-components/navigation/BackButton/BackButton';
import PrintableEmployment from './../../components/PrintableResume/PrintableEmployment/PrintableEmployment'
import PrintableEducation from './../../components/PrintableResume/PrintableEducation/PrintableEducation';
import PrintableSkills from './../../components/PrintableResume/PrintableSkills/PrintableSkills';

class PrintableResume extends Component {

    render() {
        return(
        <Fragment>
        <HomeButton />
        <PrintButton type="print"/>
        <BackButton to="resume"/>
        <div className={classes.PrintableResume}>
        <h1 className={classes.NameHeading}>Chris Slaight</h1>
        <p>Ambitious, motivated and curious software professional, my interests stem from a life long passion for technology and discovering how things work, near obsession with high quality software design and implementation, love of creatively solving problems, and developing solid code. If it involves writing code I'm interested, though I particularly enjoy front end web technolgies and design. Located in the Greater New York City/New Jersey area, but prefer remote work.</p>
        <p>For contact, please reach out via <strong>https://www.chrisslaight.com</strong> or <strong>https://www.linkedin.com/in/chrisjslaight/</strong>.</p>
            <PrintableEmployment />
            <div className={classes.EmpAndSkillsColumns}>
                <PrintableEducation />
                <PrintableSkills />
            </div>
        </div>
        </Fragment>
        );
    }
}

export default PrintableResume;