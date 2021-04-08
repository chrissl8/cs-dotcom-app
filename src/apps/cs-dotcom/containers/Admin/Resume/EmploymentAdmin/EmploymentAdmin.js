import React, { useState, useEffect } from "react";
import axios from 'axios';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './EmploymentAdmin.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
let beautify = require("json-beautify");
const parseJson = require('parse-json');

const EmploymentAdmin = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    const [employmentData, setEmploymentData] = useState();
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

    const fetchResumeData = () => {
        axios
          .get(`https://cs-dotcom-app-default-rtdb.firebaseio.com/resume.json`)
          .then((res) => {
            setEmploymentData(beautify(res.data, null, 2, 80));
          }).then(() => {
            
        }).catch((err) => {
            console.log(err);
          });
      }

      const sendResumeDataToDB = () => {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            const headers = {
                'Content-Type': 'application/json',
              }
            const patchUrl = 'https://cs-dotcom-app-default-rtdb.firebaseio.com/resume.json?auth=' + idToken;
            try{
                const employmentDataPayload = parseJson(employmentData);
               axios
            .patch(patchUrl, employmentDataPayload, headers)
            .then((res) => {
                setMessageType("success");
                setMessageText("Successfully Saved Resume Data!");
                setOpen(true);
            }).catch((err) => {
                console.log("It doesnt work",err);
                setMessageText(err);
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
    
      useEffect(() => {fetchResumeData();},[]);

      const saveResumeData = (event) => {
        event.preventDefault();
        sendResumeDataToDB();
      }

      const handleFieldChange = (event) => {
        setEmploymentData(event.target.value);
      }

    return(
        <div className={classes.EmploymentCard}>
            <h2>Employment Admin</h2>
            <div className={classes.EmploymentForm}>
            <form onSubmit={saveResumeData}> 
            <textarea 
                value={employmentData}
                onChange={handleFieldChange}
                spellCheck="false"
            />
            <ButtonGroup size="large">
                <Button color="primary" variant="text" type="submit">
                Save
                </Button>
                <Button color="secondary" variant="text" onClick={fetchResumeData} >
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

            {/* {employmentData.map((data) => (
            <p key={data.rank}>{data.company}</p>
            ))}
            {console.log(JSON.stringify(employmentData))} */}
        </div>
    )
}

export default EmploymentAdmin;