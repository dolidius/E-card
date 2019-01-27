import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Rules.module.scss';

import Container from './../Container/Container'    
import Rule1 from './Rule1';
import Rule2 from './Rule2';
import Rule3 from './Rule3';
import Rule4 from './Rule4';
import Rule5 from './Rule5';
import Rule6 from './Rule6';

class Rules extends Component  {

    changeRoute = (currentSite, where) => {
        let currentIndexRoute = parseInt(currentSite);
        if(where === 'further') {
            if(currentIndexRoute !== 6) {
                currentIndexRoute += 1;
            }
        } else {
            if(currentIndexRoute !== 1) {
                currentIndexRoute -= 1
            }
        }
        this.props.history.replace(`/rules/${currentIndexRoute}`)
    }

    render() {
        const ruleNumber = this.props.location.pathname.split('/')[2];
        return(
            <Container>
                <h2 className={classes.heading__primary}>Rules</h2>
    
                <div className={[classes.rules__arrow, classes.rules__arrow_left].join(' ')}>
                    <div><i className="far fa-arrow-alt-circle-left" onClick={() => this.changeRoute(ruleNumber, 'closer')}></i></div>
                </div>
    
                <div className={[classes.rules__arrow, classes.rules__arrow_right].join(' ')}>
                    <div><i className="far fa-arrow-alt-circle-right" onClick={() => this.changeRoute(ruleNumber, 'further')}></i></div>
                </div>
                    <Route path={`${this.props.match.url}/1`} component={Rule1} />
                    <Route path={`${this.props.match.url}/2`} component={Rule2} />
                    <Route path={`${this.props.match.url}/3`} component={Rule3} />
                    <Route path={`${this.props.match.url}/4`} component={Rule4} />
                    <Route path={`${this.props.match.url}/5`} component={Rule5} />
                    <Route path={`${this.props.match.url}/6`} component={Rule6} />
    
    
                {/* <div className={classes.rules}>
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
    
    
    
                </div> */}
            </Container>
        );
    }
    
}

export default Rules;