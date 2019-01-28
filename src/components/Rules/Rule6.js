import React from 'react';
import classes from './Rules.module.scss';

import back from '../../img/back.jpg';


const Rule6 = () => (
    <div className={classes.rule}>
        <div  className={classes.rule__set} style={{marginTop: '5rem'}} >
            <img className={classes.rule__card} src={back} alt=""/>
            <img className={classes.rule__card} src={back} alt=""/>
            <img className={classes.rule__card} src={back} alt=""/>
            <img className={classes.rule__card} src={back} alt=""/>
            <img className={classes.rule__card} src={back} alt=""/>
        </div>
        <h3 className={[classes.rule__title, classes.rule__title_long].join(' ')} >
            There are 2 rounds, with each round lasting 3 turns. Each player will play once as an emperor and once as a slave. The side that lost previous turn will be the one to start the next one. The one who managed to get more points will win the e-card game.
        </h3>
    </div>

);

export default Rule6;