import React from 'react';

import classes from './About.module.scss';

import Container from '../Container/Container';

const About = () => (
    <Container>
        <div className={classes.about}>
            <h2 className={classes.heading__primary}>About Us</h2>
            <div className={classes.about__presentation}>We are Stranweb, a team full of passionate young developers</div>
            <div className={classes.about__circles}>
                <a href='https://facebook.com' target="_blank" rel="noopener noreferrer" className={classes.about__circle}>Facebook</a>
                <a href='https://discord.gg/QZN4Vw' target="_blank" rel="noopener noreferrer" className={classes.about__circle}>Discord</a>
                <a href='https://stranweb.com' target="_blank" rel="noopener noreferrer" className={classes.about__circle}>Website</a>
            </div>
            <p className={classes.about__email}>Email: stranweb@gmail.com </p>
        
        </div>
    </Container>
)

export default About;