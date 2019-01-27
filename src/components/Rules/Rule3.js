import React from 'react';
import classes from './Rules.module.scss';

import sword from '../../img/icons/swords.svg';

import Image from './Image';

const Rule3 = () => (
    <div className={classes.rule}>

        <div className={classes.rule__container} style={{padding: '0 15rem'}}>

            <div>
                <Image card={'emperor'} won />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'citizen'} />          
            </div>

            <div>
                <Image card={'emperor'} />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'slave'} won />
            </div>

        </div>

        <h3 className={classes.rule__title}>
            The Emperor represents the one at the top of society. This card can defeat the citizen, but will lose to the Slave.
        </h3>
    </div>
);

export default Rule3;