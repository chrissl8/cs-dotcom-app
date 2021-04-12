import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import PhotographyItems from './../../components/Photography/PhotographyItems/PhotographyItems';

class Photography extends Component {

  componentDidMount() {
    document.title = 'ChrisSlaight.com | Photography';
  }

  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Photography"/>
        <PhotographyItems />
      </div>
    );
  }
}

export default Photography;
