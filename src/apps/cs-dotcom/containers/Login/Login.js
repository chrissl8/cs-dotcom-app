import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import LoginForm from './../../components/Login/LoginForm/LoginForm';
import { auth } from "./../../../../firebase";

class Login extends Component {

  constructor() {
    super();
    console.log("user", auth.currentUser);
    this.state = {
      me: auth.currentUser
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(me => {
      this.setState({ me });
    });
  }

  handleSignIn = history => (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then(() => {
      return this.props.history.push("/admin");
    });
  };

  render() {

    return (
      <div>
        <HomeButton />
        <PageTitleText text="Login"/>
        <LoginForm onSubmit={this.handleSignIn(window.history)} />
      </div>
    );
  }
}

export default Login;
