import React from "react";
import { Route, Switch} from "react-router-dom";
import Homepage from "./apps/cs-dotcom/containers/Homepage/Homepage";
import Contact from "./apps/cs-dotcom/containers/Contact/Contact";
import Login from './apps/cs-dotcom/containers/Login/Login';
import Admin from './apps/cs-dotcom/containers/Admin/Admin';
import Layout from "./apps/cs-dotcom/containers/Layout/Layout";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import asyncComponent from './apps/shared-components/asyncComponent/asyncComponent';

const asyncResume = asyncComponent(() => {
  return import('./apps/cs-dotcom/containers/Resume/Resume');
});

const asyncProjects = asyncComponent(() => {
  return import('./apps/cs-dotcom/containers/Projects/Projects');
});

const asyncApps = asyncComponent(() => {
  return import('./apps/cs-dotcom/containers/Apps/Apps');
});

const asyncPhotography = asyncComponent(() => {
  return import('./apps/cs-dotcom/containers/Photography/Photography');
});

const App = () => {

    return (
      <div className="App">
        <Layout>
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Homepage} />
              <Route path="/resume" component={asyncResume} />
              <Route path="/projects" component={asyncProjects} />
              <Route path="/apps" component={asyncApps} />
              <Route path="/photography" component={asyncPhotography} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={Admin} />
            </ScrollToTop>
          </Switch>
        </Layout>
      </div>
    );
}

export default App;
