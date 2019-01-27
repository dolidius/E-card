import React from 'react';

import classes from './Rules.module.scss';

import citizien from '../../img/citizen.jpg';
import slave from '../../img/slave.jpg';
import emperor from '../../img/emperor.jpg';

const Rule1 = () => (
    <div className={classes.rule}>
        <div className={classes.rule__set}>
            <img className={classes.rule__card} src={citizien} alt="" />
            <img className={classes.rule__card} src={citizien} alt="" />
            <img className={classes.rule__card} src={citizien} alt="" />
            <img className={classes.rule__card} src={citizien} alt="" />
        </div>
        <div className={classes.rule__set}>
            <img className={classes.rule__card} src={slave} alt="" />
            <span className={classes.rule__questionMark}> ? </span>
            <img className={classes.rule__card} src={emperor} alt="" />
        </div>
        <h3 className={classes.rule__title}>
            Each player has 5 cards, 4 Citizens and either Slave or Emperor.
        </h3>
    </div>
);

export default Rule1;