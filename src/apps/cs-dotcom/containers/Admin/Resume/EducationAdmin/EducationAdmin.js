import React, { useState, useEffect } from "react";
import axios from 'axios';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './EducationAdmin.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
let beautify = require("json-beautify");
const parseJson = require('parse-json');

const EducationAdmin = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    const [educationData, setEducationData] = useState();
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

    const fetchEducationData = () => {
        axios
          .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/education.json`)
          .then((res) => {
            setEducationData(beautify(res.data, null, 2, 80));
          }).then(() => {
            
        }).catch((err) => {
            console.log(err);
          });
      }

      const sendEducationDataToDB = () => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            const headers = {
                'Content-Type': 'application/json',
              }
            const patchUrl = 'https://cs-dotcom-app-default-rtdb.firebaseio.com/education.json?auth=' + idToken;
            try{
                const educationDataPayload = parseJson(educationData);
               axios
            .patch(patchUrl, educationDataPayload, headers)
            .then((res) => {
                setMessageType("success");
                setMessageText("Successfully Saved Education Data!");
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
    
      useEffect(() => {fetchEducationData();},[]);

      const saveEduData = (event) => {
        event.preventDefault();
        sendEducationDataToDB();
      }

      const handleFieldChange = (event) => {
        setEducationData(event.target.value);
      }

    return(
        <div className={classes.EducationCard}>
            <h2>Education Admin</h2>
            <p>Use the below editor to modify Education data, using the expected JSON format.</p>
            <div className={classes.EducationForm}>
            <form onSubmit={saveEduData}> 
            <textarea 
                value={educationData}
                onChange={handleFieldChange}
                spellCheck="false"
            />
            <ButtonGroup size="large">
                <Button color="primary" variant="text" type="submit">
                Save
                </Button>
                <Button color="secondary" variant="text" onClick={fetchEducationData} >
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

export default EducationAdmin;