import React, { Component } from 'react';
import Title from './Title.js';
import '../styles/Tech.css';
import { Bounce } from 'react-awesome-reveal';
import css from '../images/techStack_logos/css-3.svg';
import html from '../images/techStack_logos/html-5.svg';
import js from '../images/techStack_logos/javascript.svg';
import node from '../images/techStack_logos/nodejs-icon.svg';
import sql from '../images/techStack_logos/postgresql.svg';
import react from '../images/techStack_logos/react.svg';

export default class Tech extends Component {
  render() {
    return (
      <div className="tech">
        <Title title="TECH STACK" />
        <Bounce duration={1000} delay={500}>
        <div className="tech-display">
          <img className="svg-logo"src={html} alt="HTML Logo" />
          <img className="svg-logo"src={js} alt="Javascript Logo" />
          <img className="svg-logo" src={css} alt="CSS Logo" />
          <img className="svg-logo"src={node} alt="Node Logo" />
          <img className="svg-logo"src={sql} alt="SQL Logo" />
          <img className="svg-logo"src={react} alt="React Logo" />
        </div>
        </Bounce>
        
      </div>
    )
  }
}
