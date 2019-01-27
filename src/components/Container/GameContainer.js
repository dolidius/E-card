import React from 'react';
import classes from './Container.module.scss';

import Arrow from '../../containers/Arrow/Arrow';

const GameContainer = (props) => (
    <div className={classes.container__game}>
        <Arrow inGame />
        {props.children}
    </div>
)

export default GameContainer;