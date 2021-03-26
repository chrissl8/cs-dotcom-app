import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./apps/cs-dotcom/containers/Homepage/Homepage";
import Resume from "./apps/cs-dotcom/containers/Resume/Resume";
import Projects from "./apps/cs-dotcom/containers/Projects/Projects";
import Apps from "./apps/cs-dotcom/containers/Apps/Apps";
import Photography from "./apps/cs-dotcom/containers/Photography/Photography";
import Contact from "./apps/cs-dotcom/containers/Contact/Contact";
import Layout from "./apps/cs-dotcom/containers/Layout/Layout";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

class App extends Component {
  render() {
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
            </ScrollToTop>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
