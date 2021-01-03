import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';

export default class Main extends Component {
    render() {
        return (
            <section className="intro">
                <Fade left duration={2000} delay={500} distance='100px'>
                   <div>
                        <h1 className="name">Shane Upchurch</h1>
                        <h2 className="title">Software Engineer</h2>
                    </div>
                </Fade>
            </section>
        )
    }
}
