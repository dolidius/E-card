import React, { Component } from 'react';
import classes from './Home.module.scss'
import Button from './../../containers/Buttons/Button';
import Container from '../Container/Container';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1 className={classes.heading__primary}>E-CARD</h1>

                <div className={classes.home__group}>
                    <Button href="game" text='Singleplayer' btnClass='button__home' animated/>
                    <Button href="multi" text='Multiplayer' btnClass='button__home' animated/>
                </div>

                <div className={classes.home__group}>
                    <Button href="rules" text='Rules' btnClass='button__home' animated/>
                    <Button href="about" text='About' btnClass='button__home' animated/>
                </div>
            </Container>
        )
    }
}

export default Home;