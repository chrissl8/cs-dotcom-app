import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import LogoutButton from '../../../shared-components/navigation/LogoutButton/LogoutButton';
import { auth } from "./../../../../firebase";
import axios from './../../axios/axios';
import firebase from 'firebase';

class Admin extends Component {

  state = {
    resumeData: [],
  }

  componentDidMount() {
    //console.log(firebase.auth().currentUser.getIdToken(true));

    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
      axios
      .get(`/resume.json?auth=${idToken}`)
      .then((res) => {
        console.log(res.data);
        const fetchedResumeItems = [];
        for (let key in res.data) {
          fetchedResumeItems.push({ ...res.data[key], id: key });
        }
        this.setState({ resumeData: fetchedResumeItems });
      })
      .catch((err) => {
        console.log(err);
      });
    })

    

  }

  render() {
    return (
      <div>
        <div>
          <LogoutButton onClick={() => auth.signOut()}/>
          <HomeButton />
        </div>
        <PageTitleText text="Admin"/>
        <p>Admin Console Will Go Here</p>
        {this.state.resumeData.map((data) => (
          <p key={data.rank}>{data.company}</p>
        ))}

      </div>
    );
  }
}

export default Admin;
