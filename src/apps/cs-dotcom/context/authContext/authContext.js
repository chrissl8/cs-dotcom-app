import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
  isAuth: false,
  token: null,
  userId: null,
  email: '',
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [authUserId, setAuthUserId] = useState(null);
  const [authEmail, setAuthEmail] = useState('');

  const loginHandler = async (email, password) => {
      const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBS9eVlw6lBH-IJaqvEyfEKlxXm0X8H0Eo';
      let authData = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      const authResponse = await axios.post(url, authData);
      if(authResponse.status === 200 && authResponse.data.idToken != null) {
        setAuthToken(authResponse.data.idToken);
        setAuthUserId(authResponse.data.localId);
        setAuthEmail(authResponse.data.email);
        setIsAuthenticated(true);
      }
  };

  const logoutHandler = () => {
    setAuthToken(null);
    setAuthUserId(null);
    setAuthEmail('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={
        {   
            login: loginHandler,
            isAuth: isAuthenticated, 
            token: authToken, 
            userId: authUserId, 
            email: authEmail,
            logout: logoutHandler
        }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
