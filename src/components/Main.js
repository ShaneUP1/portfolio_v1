import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

export default class Main extends Component {
    render() {
        return (
            <section className="intro">
                <Fade left duration={2000} delay={500} >
                   <div>
                        <h1 className="name">Shane Upchurch</h1>
                        <h2 className="title">Software Engineer</h2>
                    </div>
                </Fade>
                <Fade left duration={2000} delay={1000} >
                    <span className="more-btn">
                        <Link to="about" smooth duration={1000}>
                            {"Know more"}
                        </Link>
                    </span>
                </Fade>
            </section>
        )
    }
}
