import React, { Component } from 'react'

import classes from './Container.module.scss';

import { withRouter } from 'react-router-dom';

import Arrow from '../../containers/Arrow/Arrow';

class Container extends Component {
    render() {
        return (
            <div className={classes.container}>
                {this.props.match.path !== "/" && <Arrow />}
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Container);