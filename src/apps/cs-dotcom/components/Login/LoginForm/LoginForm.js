import React, { Component } from "react";
import classes from './LoginForm.module.css';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
          email: "",
          password: ""
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { email, password } = this.state;
        if (onSubmit) {
          this.setState({ submitting: true });
          onSubmit(email, password);
        }
      };

      handleChange = key => e => {
        this.setState({ [key]: e.target.value });
      };
    
render () {
    const { email, password } = this.state;
    return (
        <div className={classes.LoginForm}>
          <h1 className="">Sign In</h1>
          <div>
            <form className="" onSubmit={this.handleSubmit}>
            <div className={classes.FormItems}>
              <label htmlFor="userEmail" className="block">
                Email:
              </label>
              <input
                type="email"
                name="userEmail"
                value = {email}
                placeholder="e.g: myemail@email.com"
                id="userEmail"
                onChange = {this.handleChange("email")}
              />
            </div>
            <div className={classes.FormItems}>
              <label htmlFor="userPassword" className="block">
                Password:
              </label>
              <input
                type="password"
                name="userPassword"
                value = {password}
                placeholder="Your Password"
                id="userPassword"
                onChange = {this.handleChange("password")}
              />
            </div>
              <button>
                Sign in
              </button>
            </form>
          </div>
        </div>
        )
    }
      
};

export default LoginForm;