import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import Title from './Title.js';
import shane_portfolio_site from '../images/shane_portfolio_site.JPG';
import '../styles/About.css';

export default class About extends Component {
    render() {
        return (
            <>
            <div className="about" >
                <Title title="ABOUT ME" />
                <span className="about-wrapper">
                <Fade duration={1000} delay={400} style={{display: "flex", justifyContent: "flex-end", alignSelf: "center"}} >
                        <div>
                        <img className="bio-image"
                            src={shane_portfolio_site}
                            alt="Shane" />
                        </div>
                </Fade>
                <Fade style={{textAlign: "left", fontSize: "16px"}} duration={1000} delay={400}>
                        <div className="bio" >
                        <p>
                        A Software Engineer coming from a Mechanical Engineering and fitness background. Living up to the Gemini rep, I am truly a jack-of-all-trades. It's a testament to my adaptability, pursuit of personal growth, and passion for craftsmanship.
                        </p>
                        <p>
                        I'm a full-stack developer with an eye for detail and an appreciation for TDD. I enjoy creating solutions to human-centered problems, and I'm always looking for new and creative ways to do so. Toss in a few perks for making the world a little better of a place and I'm all in!
                        </p>
                        <p>
                        When not behind my computer you can find me in the kitchen, at the beach, or on the trail with my wife and son. Checkout my projects below and please reach out!
                        </p>
                        </div>
                </Fade>
                </span>
                

            </div>
            </>
        )
    }
}
