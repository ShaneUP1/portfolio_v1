import React, { Component } from 'react'
import Title from './Title.js';
import '../styles/Projects.css';
import tictactoe_project from '../images/tictactoe_project.jpg';
import gitThereAPI_project from '../images/gitThereAPI_project.jpg';
import { Fade } from 'react-awesome-reveal';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                < Title title="PROJECTS" />
                <section className="projects-wrapper" >
                <Fade duration={1000} delay={500} >
                    <div className="project-info row">
                        This app was built using just good old javascript, html and css. Local storage is used to maintain state, so users can track their wins, losses, and cats as well as check on a variety of game stats and still return to their game in progress. Two different algorithms were created to offer different difficulty modes.<br></br><br></br>
                        This was a fun one that pushed our limits, forced us to come up with creative ways to manage gameplay, and even surprised us with some unknown "double-win" game results. Give it a try!
                    </div>
                    </Fade>

                    <Fade duration={1000} delay={700} >
                    <div className="project-img row">
                        <img src={tictactoe_project} alt='tic-tac-toe project' />
                    </div>

                    <div className="project-info row">
                        This is the text info about my second project.
                    </div>
                    <div className="project-img row">
                        <img src={gitThereAPI_project} alt='gitThere API project' />
                    </div>
                    </Fade>
                </section>
                
            </div>
        )
    }
}
