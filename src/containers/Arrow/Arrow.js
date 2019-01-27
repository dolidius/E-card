import React from 'react';

import classes from './Arrow.module.scss';

import { Link } from 'react-router-dom';

const Arrow = (props) => (
    <Link to="/">
        <div className={props.inGame ? [classes.arrow, classes.arrow__inGame].join(' ') : classes.arrow}>
            <i className="fas fa-chevron-circle-left"></i>
        </div>
    </Link>
);

export default Arrow;