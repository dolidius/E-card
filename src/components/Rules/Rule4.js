import React from 'react';
import classes from './Rules.module.scss';

import sword from '../../img/icons/swords.svg';

import Image from './Image';

const Rule4 = () => (
    <div className={classes.rule}>

        <div className={classes.rule__container} style={{padding: '0 15rem'}}>

            <div>
                <Image card={'slave'} won />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'emperor'} />
            </div>

            <div>
                <Image card={'slave'} />
                <img className={classes.rule__sword} src={sword} alt="" />
                <Image card={'citizen'} won />
            </div>

        </div>

        <h3 className={classes.rule__title}>
            The Slave is presented as the one at the very bottom of society. Seeing as how it has nothing to lose, it can overthrow the Emperor in one last attempt at revenge. However, it can be beaten by citizen
            </h3>
    </div>
);

export default Rule4;