import React, { useState, useEffect } from "react";
import axios from 'axios';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './SkillsAdmin.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
let beautify = require("json-beautify");
const parseJson = require('parse-json');

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

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const fetchSkillsData = () => {
        axios
          .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/skills.json`)
          .then((res) => {
            setSkillsData(beautify(res.data, null, 2, 80));
          }).then(() => {
            
        }).catch((err) => {
            console.log(err);
          });
      }

      const sendSkillsDataToDB = () => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            const headers = {
                'Content-Type': 'application/json',
              }
            const patchUrl = 'https://cs-dotcom-app-default-rtdb.firebaseio.com/skills.json?auth=' + idToken;
            try{
                const skillsDataPayload = parseJson(skillsData);
               axios
            .patch(patchUrl, skillsDataPayload, headers)
            .then((res) => {
                setMessageType("success");
                setMessageText("Successfully Saved Skills Data!");
                setOpen(true);
            }).catch((err) => {
                console.log(err);
            }); 
            }
            catch(e)
            {
                const errorMessage = e.name + ": " + e.message;
                console.log(errorMessage);
                setMessageType("error");
                setMessageText(errorMessage);
                setOpen(true);
            }
        });
      }
    
      useEffect(() => {fetchSkillsData();},[]);

      const saveSkillsData = (event) => {
        event.preventDefault();
        sendSkillsDataToDB();
      }

      const handleFieldChange = (event) => {
        setSkillsData(event.target.value);
      }

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