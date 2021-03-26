import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Portfolio"/>
        <p>Coming soon!</p>
      </div>
    );
  }
}

export default Portfolio;
