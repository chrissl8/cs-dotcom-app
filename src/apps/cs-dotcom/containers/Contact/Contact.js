import React, { Component } from "react";
import PageTitleText from './../../../shared-components/PageTitleText/PageTitleText';
import HomeButton from '../../../shared-components/navigation/HomeButton/HomeButton';
import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <PageTitleText text="Contact"/>
        <div className={classes.Contact}>
          <div className={classes.ContactItem}>
            <a href="https://www.linkedin.com/in/chrisjslaight/" target="blank"><FontAwesomeIcon size="1x" icon={faLinkedinIn} /> 
              <span className={classes.ContactText}>Chris Slaight on LinkedIn</span><FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
            </a>
          </div>
          <div className={classes.ContactItem}>
            <a href="https://github.com/chrissl8/" target="blank"><FontAwesomeIcon size="1x" icon={faGithub} /> 
              <span className={classes.ContactText}>github.com/chrissl8</span><FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
            </a>
          </div>
          <div className={classes.ContactItem}>
            <FontAwesomeIcon size="1x" icon={faEnvelope} />
            <span className={classes.ContactText}>chrisjslaight at gmail dot com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
