import React, { Component } from 'react'
import Title from './Title.js';
import '../styles/Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                < Title title="PROJECTS" />
                <section className="projects-wrapper">
                    <div className="projects-row-1">
                        INFO 1
                        IMAGE 1
                    </div>
                    <div className="projects-row-2">
                        INFO 2 
                        IMAGE 2
                    </div>
                </section>
                
            </div>
        )
    }
}
