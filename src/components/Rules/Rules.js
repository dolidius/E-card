import React from 'react';

import classes from './Rules.module.scss';

import Container from './../Container/Container'

const Rules = () => (
    <Container>
        <h2 className={classes.heading__primary}>Rules</h2>
        <div className={classes.rules}>
            <span className={classes.rules__rule}>
                Each player has 5 cards, 4 Citizens and either Slave or Emperor.
            </span>

            <span className={classes.rules__rule}>
                The Citizen card represents the common man, and cannot defeat the Emperor who sits at the top. It can, however, defeat the Slave, who resides at the very bottom of the system. Two citizen against each other results in a tie.
            </span>

            <span className={classes.rules__rule}>
                The Emperor represents the one at the top of society. This card can defeat the citizen, but will lose to the Slave.
            </span>

            <span className={classes.rules__rule}>
                The Slave is presented as the one at the very bottom of society. Seeing as how it has nothing to lose, it can overthrow the Emperor in one last attempt at revenge.
            </span>

            <span className={classes.rules__rule}>
                Winning as the emperor grants you one point, while winning as the slave grants you three.
            </span>

            <span className={classes.rules__rule}>
                There are 2 rounds, with each round lasting 3 turns. Each player will play once as an emperor and once as a slave. The one who managed to get more points will win the e-card game.
            </span>

        </div>
    </Container>
)

export default Rules;