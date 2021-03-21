import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./apps/cs-dotcom/containers/Homepage/Homepage";
import Resume from "./apps/cs-dotcom/containers/Resume/Resume";
import Portfolio from "./apps/cs-dotcom/containers/Portfolio/Portfolio";
import Contact from "./apps/cs-dotcom/containers/Contact/Contact";
import Layout from "./apps/cs-dotcom/containers/Layout/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
