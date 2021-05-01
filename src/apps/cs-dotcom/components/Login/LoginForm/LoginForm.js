import React, { useState, useContext } from "react";
import classes from './LoginForm.module.css';
import { AuthContext } from './../../../context/authContext/authContext';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {

    const authContext = useContext(AuthContext);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      authContext.login(email,password).then(() => {
        history.push('/admin');
      });
    }

    return (
        <div className={classes.LoginForm}>
          <h1 className="">Sign In</h1>
          <div>
            <form className="" onSubmit={handleSubmit}>
            <div className={classes.FormItems}>
              <input
                type="email"
                name="userEmail"
                value = {email}
                placeholder="email"
                id="userEmail"
                onChange = {e => {setEmail(e.target.value)}}
              />
            </div>
            <div className={classes.FormItems}>
              <input
                type="password"
                name="userPassword"
                value = {password}
                placeholder="password"
                id="userPassword"
                onChange = {e => {setPassword(e.target.value)}}
              />
            </div>
              <button>
                Sign in
              </button>
            </form>
          </div>
        </div>
        )
      
};

export default LoginForm;