import React, { Component } from 'react'

import classes from './Layout.module.scss';

class Layout extends Component {
    render() {
        return (
            <div className={classes.background}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;