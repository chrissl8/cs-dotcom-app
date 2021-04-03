import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBS9eVlw6lBH-IJaqvEyfEKlxXm0X8H0Eo",
    authDomain: "cs-dotcom-app.firebaseapp.com",
    databaseURL: "https://cs-dotcom-app-default-rtdb.firebaseio.com",
    projectId: "cs-dotcom-app",
    storageBucket: "cs-dotcom-app.appspot.com",
    messagingSenderId: "355102441513",
    appId: "1:355102441513:web:e8557b84421b45f51bdc38"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();