import React from 'react';
import classes from './Rules.module.scss';

import Image from './Image';

const Rule5 = () => (
    <div className={classes.rule}>
        <div className={[classes.rule__container, classes.pd_hg].join(' ')} >
            <div style={{position: 'relative'}}>
                <Image card={'emperor'} won />
                <span className={classes.rule__amount}>+1</span>
            </div>
            <div style={{position: 'relative'}}>
                <Image card={'citizen'} won />
                <span className={classes.rule__amount}>+1</span>
            </div>
            <div style={{position: 'relative'}}>
                <Image card={'slave'} won />
                <span className={classes.rule__amount}>+3</span>
            </div>
        </div>
        <h3 style={{marginTop: '7rem'}} className={classes.rule__title}>
            Winning as the emperor and citizen grants you one point, while winning as the slave grants you three.
        </h3>
    </div>
)

export default Rule5;   