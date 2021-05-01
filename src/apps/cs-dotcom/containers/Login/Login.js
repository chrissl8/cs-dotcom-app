import React, { useContext } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import LoginForm from './../../components/Login/LoginForm/LoginForm';
import { AuthContext } from './../../context/authContext/authContext';
import { Redirect } from 'react-router-dom';

const Login = () => {

  const authContext = useContext(AuthContext);

  let render = <Redirect to="/admin" />;

  if(!authContext.isAuth) {
    render = (
      <div>
        <HomeButton />
        <PageTitleText text="Login"/>
        <LoginForm/>
      </div>
    )
  }
    return render;
}

export default Login;
