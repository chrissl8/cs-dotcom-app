import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./apps/cs-dotcom/containers/Homepage/Homepage";
import Resume from "./apps/cs-dotcom/containers/Resume/Resume";
import Projects from "./apps/cs-dotcom/containers/Projects/Projects";
import Apps from "./apps/cs-dotcom/containers/Apps/Apps";
import Photography from "./apps/cs-dotcom/containers/Photography/Photography";
import Contact from "./apps/cs-dotcom/containers/Contact/Contact";
import Login from './apps/cs-dotcom/containers/Login/Login';
import Admin from './apps/cs-dotcom/containers/Admin/Admin';
import Layout from "./apps/cs-dotcom/containers/Layout/Layout";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import withAuthProtection from './apps/cs-dotcom/containers/Login/withAuthProtection';
import { auth } from './firebase';

const ProtectedAdmin = withAuthProtection("/login")(Admin);

class App extends Component {

  state = {
    me: auth.currentUser
  };

  componentDidMount() {
    auth.onAuthStateChanged(me => {
      this.setState({ me });
    });
  }

  render() {
    const { me } = this.state;
    return (
      <div className="App">
        <Layout>
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Homepage} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/apps" component={Apps} />
              <Route path="/photography" component={Photography} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/admin" render={ props => (
                  <ProtectedAdmin {...props} me={me} />
                )
              } />
            </ScrollToTop>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
