import React, { Component } from 'react'
import Title from './Title.js';
import '../styles/Projects.css';
import tictactoe_project from '../images/tictactoe_project.jpg';
import gitThereAPI_project from '../images/gitThereAPI_project.jpg';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-tilt';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                < Title title="PROJECTS" />
                <section className="projects-wrapper" >
                <Fade duration={1000} delay={500} >
                    <div className="project-info row">
                        Our re-creation of the classic tic-tac-toe using  javascript, html and css. Local storage is used to maintain state, so users can track their wins, losses, and cats as well as check on a variety of game stats and still return to their game in progress. Two different algorithms were created to offer different difficulty modes.<br></br><br></br>
                        This was a fun one that pushed our limits, forced us to come up with creative ways to manage gameplay, and even surprised us with some unknown "double-win" game results. Give it a try!
                    </div>
                    </Fade>

                    <Fade duration={1000} delay={700} >
                        
                    <div className="row">
                    <Tilt 
                        options={{
                            reverse: false,
                            max: 10,
                            perspective: 500,
                            scale: 1,
                            speed: 100,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}>
                        <a href='https://sformichella.github.io/t4-xoxo/'>
                        <img className="project-img" src={tictactoe_project} alt='tic-tac-toe project' style={{ boxShadow: "5px 5px 3px gray"}} />
                        </a>
                        </Tilt>
                    </div>
                    

                    <div className="project-info row">
                        Here's an app we built to show users the different eco-transportation choices within walking distance of their current location. Using a Node Express back end and a React front end, incoporating multiple RESTful API calls to gather data, we were able to display all the options around the user on a Google-map-react component, and then further using basic Javascript to allow users to sign-up and login to get access to their saved locations.<br></br><br></br>
                        Specific to the Portland area, though it could easily be scaled up to other large cities, we hope it comes in handy!
                    </div>
                    
                    <div className="row">
                    <Tilt 
                        options={{
                            reverse: false,
                            max: 10,
                            perspective: 500,
                            scale: 1,
                            speed: 100,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}>
                        <a href='https://git-there-api.netlify.app/'>
                        <img className="project-img" src={gitThereAPI_project} alt='gitThere API project' style={{ boxShadow: "5px 5px 3px gray"}}/>
                        </a>
                        </Tilt>
                    </div>
                    
                    </Fade>
                </section>
                
            </div>
        )
    }
}
