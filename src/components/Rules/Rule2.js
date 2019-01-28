import React from 'react';
import classes from './Rules.module.scss';

import sword from '../../img/icons/swords.svg';

import Image from './Image';

const Rule2 = () => (
    <div className={classes.rule}>
        <div className={classes.rule__container}>

            <div className={classes.rule__fight}>
                <Image card={'citizen'} small />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'emperor'} won small />
            </div>

            <div className={classes.rule__fight}>
                <Image card={'citizen'} won small />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'slave'} small />
            </div>

            <div className={classes.rule__fight}>
                <Image card={'citizen'} won small />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'citizen'} won small />
            </div>

        </div>
        <h3 className={[classes.rule__title, classes.rule__title_long].join(' ')}>
            The Citizen card represents the common man, and cannot defeat the Emperor who sits at the top. It can, however, defeat the Slave, who resides at the very bottom of the system. Two citizen against each other results in a tie.
        </h3>
    </div>
)

export default Rule2;