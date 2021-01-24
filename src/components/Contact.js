import React, { Component } from 'react';
import Title from './Title.js';
import { Fade } from 'react-awesome-reveal';
import email from '../images/contact_icons/email.svg';
import github from '../images/contact_icons/github.svg';
import linkedin from '../images/contact_icons/linkedin.svg';

import '../styles/Contact.css';




export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Title title="CONTACT" />
        < Fade duration={500} delay={200} >
        <h3>Ready to talk? Let's do it!</h3>
        <div className="logo-spread">
          <a className="contact-icon" href="https://github.com/ShaneUP1">
            <img id="contact-link" src={github} alt="github logo" />
          </a>
          <a className="contact-icon" href="https://www.linkedin.com/in/shaneupchurch/">
            <img id="contact-link" src={linkedin} alt="linkedin logo" />
          </a>  
          <a className="contact-icon" href="mailto: shaneupchurch@gmail.com">
            <img id="contact-link" src={email} alt="email logo" />
          </a>
        </div>
        </Fade>
      </div>
    )
  }
}
