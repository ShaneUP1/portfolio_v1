import React, { Component } from 'react';
import Title from './Title.js';
import '../styles/Tech.css';
import css from '../images/techStack_Logos/css-3.svg';
import html from '../images/techStack_Logos/html-5.svg';
import js from '../images/techStack_Logos/javascript.svg';
import node from '../images/techStack_Logos/nodejs-icon.svg';
import sql from '../images/techStack_Logos/postgresql.svg';
import react from '../images/techStack_Logos/react.svg';

export default class Tech extends Component {
  render() {
    return (
      <div className="tech">
        <Title title="TECH STACK" />
        <div className="tech-display">
          <img className="svg-logo" src={css} alt="CSS Logo" />
          <img className="svg-logo"src={html} alt="HTML Logo" />
          <img className="svg-logo"src={js} alt="Javascript Logo" />
          <img className="svg-logo"src={node} alt="Node Logo" />
          <img className="svg-logo"src={sql} alt="SQL Logo" />
          <img className="svg-logo"src={react} alt="React Logo" />
        </div>
        
      </div>
    )
  }
}
