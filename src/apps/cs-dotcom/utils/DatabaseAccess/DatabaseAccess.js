import axios from 'axios';
import firebase from 'firebase';
const parseJson = require('parse-json');

/**
 * Saves JSON-formatted data to Firebase database
 * @async
 * @param  {String} dataSetName The type of data requested
 * @param  {JSON} dataPayload The JSON data object
 * @return {Promise<{JSON}>} A response object with 'messageType' and 'messageText' strings
 */
export const sendJSONDataToDB = async (dataSetName, dataPayload) => { 
    
    let responseObject = {
        messageType: '', 
        messageText: ''
    }

    const idToken = await firebase.auth().currentUser.getIdToken(true);

        const requestUrl = 'https://cs-dotcom-app-default-rtdb.firebaseio.com/' + dataSetName + '.json?auth=' + idToken;
        const headers = { 'Content-Type': 'application/json'};
        
        try {
            const parsedDataPayload = parseJson(dataPayload);
            const res = await axios.patch(requestUrl, parsedDataPayload, headers);
            if(res.status === 200) {
                responseObject.messageType =  'success';
                responseObject.messageText =  'Successfully saved ' + dataSetName + ' data!';
            }
            else {
                responseObject.messageType = 'error';
                responseObject.messageText = res.statusText;
            }
        }
        catch(e) {
            const errorMessage = e.name + ": " + e.message;
            responseObject.messageType = 'error';
            responseObject.messageText = errorMessage;
        }
    
    return responseObject;
};

/**
 * Retrieves JSON-formatted data from Firebase database
 * @async
 * @param  {String} dataSetName The type of data requested
 * @return  {Promise<{JSON}>} The data set requested in JSON format
 */
export const fetchJSONDataFromDB = async (dataSetName) => {

    let responseJsonObject;

    const res = await axios.get('https://cs-dotcom-app-default-rtdb.firebaseio.com/' + dataSetName + '.json');
    try {
             if(res.status === 200) {
                responseJsonObject = res.data;
            }
            else {
                console.log(res);
            }     
        }    
    catch(e) {
        console.log(e);
    }
    return responseJsonObject;
};