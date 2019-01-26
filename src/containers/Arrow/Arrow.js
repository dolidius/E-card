import React from 'react';

import classes from './Arrow.module.scss';

import { Link } from 'react-router-dom';

const Arrow = () => (
    <Link to="/">
        <div className={classes.arrow}>
            <i className="fas fa-chevron-circle-left"></i>
        </div>
    </Link>
);

export default Arrow;