import React, { Component } from 'react';
import Title from './Title.js';
import '../styles/Tech.css';
import { Fade } from 'react-awesome-reveal';

export default class Tech extends Component {
  render() {
    return (
      <div className="tech">
        <Title title="TECH STACK" />
        <Fade direction="up" duration={1000} delay={500} triggerOnce>
        <div className="tech-display">
          <img className="svg-logo"src='html-5.svg' alt="HTML Logo" />
          <img className="svg-logo"src='javascript.svg' alt="Javascript Logo" />
          <img className="svg-logo" src='css-3.svg' alt="CSS Logo" />
          <img className="svg-logo"src='nodejs-icon.svg' alt="Node Logo" />
          <img className="svg-logo"src='postgresql.svg' alt="SQL Logo" />
          <img className="svg-logo"src='react.svg' alt="React Logo" />
        </div>
        </Fade>
      </div>
    )
  }
}
