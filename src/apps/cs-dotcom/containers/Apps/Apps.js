import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';

class Apps extends Component {

  componentDidMount() {
    document.title = 'ChrisSlaight.com | Apps';
  }

  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Apps"/>
        <p>Coming soon!</p>
      </div>
    );
  }
}

export default Apps;
