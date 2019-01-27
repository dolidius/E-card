import React, { Component } from 'react';
import classes from './Rules.module.scss';

import citizen from '../../img/citizen.jpg';
import slave from '../../img/slave.jpg';
import emperor from '../../img/emperor.jpg';
import emperor_defeated from '../../img/emperor_defeated.jpg';
import slave_defeated from '../../img/slave_defeated.jpg';
import citizen_defeated from '../../img/citizen_defeated.jpg';

class Image extends Component {
    render() {
        let src;
        if(this.props.won){
            if(this.props.card === 'emperor')src = emperor;
            if(this.props.card === 'citizen')src = citizen;
            if(this.props.card === 'slave')src = slave;
            return(
                <span style={{display: 'inline-block', position: 'relative'}}>
                    <i className={[classes.rule__crown].join(' ') + ' fas fa-crown'}></i>
                    <img className={this.props.small ? classes.rule__card_sm : classes.rule__card} src={src} alt="" />
                </span>
            )
        }else{
            if(this.props.card === 'emperor')src = emperor_defeated;
            if(this.props.card === 'citizen')src = citizen_defeated;
            if(this.props.card === 'slave')src = slave_defeated;
            return(
                <img className={this.props.small ? classes.rule__card_sm : classes.rule__card} src={src} alt="" />
            )
        }
    }
}

export default Image;