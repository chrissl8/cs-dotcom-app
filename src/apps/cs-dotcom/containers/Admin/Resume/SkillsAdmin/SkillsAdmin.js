import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './SkillsAdmin.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import * as DataSetName from './../../../../constants/DataSetName/DataSetName';
import { sendJSONDataToDB, fetchJSONDataFromDB } from './../../../../utils/DatabaseAccess/DatabaseAccess';
let beautify = require("json-beautify");

const SkillsAdmin = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    const [skillsData, setSkillsData] = useState();
    const [open, setOpen] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [messageType, setMessageType] = useState("success"); 
    const styleClasses = useStyles();

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleFieldChange = (event) => {
      setSkillsData(event.target.value);
    };

    const fetchSkillsData = async () => {
      setSkillsData(
        beautify(await fetchJSONDataFromDB(DataSetName.SKILLS), null, 2, 80));};

    useEffect(() => {
      fetchSkillsData();
    },[]);

    const saveSkillsData = async (event) => {
      event.preventDefault();
      const res = await sendJSONDataToDB(DataSetName.SKILLS, skillsData);
      setMessageType(res.messageType);
      setMessageText(res.messageText);
      setOpen(true);
    };

    return(
        <div className={classes.SkillsCard}>
            <h2>Skills Admin</h2>
            <p>Use the below editor to modify Skills data, using the expected JSON format.</p>
            <div className={classes.SkillsForm}>
            <form onSubmit={saveSkillsData}> 
            <textarea 
                value={skillsData}
                onChange={handleFieldChange}
                spellCheck="false"
            />
            <ButtonGroup size="large">
                <Button color="primary" variant="text" type="submit">
                Save
                </Button>
                <Button color="secondary" variant="text" onClick={fetchSkillsData} >
                Revert
                </Button>
            </ButtonGroup>
            <div className={styleClasses.root}>
                <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={messageType}>
                    {messageText}
                    </Alert>
                </Snackbar>
            </div>
            </form>
            </div>
        </div>
    )
}

export default SkillsAdmin;