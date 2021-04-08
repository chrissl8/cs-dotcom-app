import React, { useState } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import LogoutButton from '../../../shared-components/navigation/LogoutButton/LogoutButton';
import { auth } from "./../../../../firebase";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import EducationAdmin from './../Admin/Resume/EducationAdmin/EducationAdmin';
import EmploymentAdmin from './../Admin/Resume/EmploymentAdmin/EmploymentAdmin';
import SkillsAdmin from './../Admin/Resume/SkillsAdmin/SkillsAdmin';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    margin: 'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Admin = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
      <div>
        <div>
          <LogoutButton onClick={() => auth.signOut()}/>
          <HomeButton />
        </div>
        <PageTitleText text="Admin"/>
        <div className={classes.root}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Employment Admin</Typography>
              <Typography className={classes.secondaryHeading}>Edit employment details.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EmploymentAdmin />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>          
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Education Admin</Typography>
              <Typography className={classes.secondaryHeading}>Edit education details.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EducationAdmin />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>          
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Skills Admin</Typography>
              <Typography className={classes.secondaryHeading}>Edit skills details.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SkillsAdmin />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  
}

export default Admin;
