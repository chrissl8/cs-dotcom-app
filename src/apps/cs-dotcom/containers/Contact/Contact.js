import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Contact"/>
        <div className={classes.Contact}>
          <div className={classes.ContactItem}><a href="https://www.linkedin.com/in/chrisjslaight/"><FontAwesomeIcon size="1x" icon={faLinkedinIn} /> Chris Slaight on LinkedIn (<FontAwesomeIcon size="xs" icon={faLink} />)</a></div>
          <div className={classes.ContactItem}><a href="https://github.com/chrissl8/"><FontAwesomeIcon size="1x" icon={faGithub} /> github.com/chrissl8 (<FontAwesomeIcon size="xs" icon={faLink} />)</a></div>
          <div className={classes.ContactItem}><FontAwesomeIcon size="1x" icon={faEnvelope} /> chrisjslaight at gmail dot com</div>
        </div>
      </div>
    );
  }
}

export default Contact;
