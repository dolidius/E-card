import React, { Component } from 'react';
import classes from './Score.module.scss'

class Score extends Component{

    state = {
        playerStyles: {},
        botStyles: {}
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.botScore > this.props.botScore){
            this.setGreenColor('bot');
        }
        if(nextProps.playerScore > this.props.playerScore){
            this.setGreenColor('player');
        }
    }

    setGreenColor = user => {
        if(user === 'bot'){
            this.setState({botStyles: { color: '#2CE960', fontSize: '4.8rem' }});
            setTimeout(() => this.setState({botStyles: {}}), 1000);
        }

        if(user === 'player'){
            this.setState({playerStyles: { color: '#2CE960', fontSize: '4.8rem' }});
            setTimeout(() => this.setState({playerStyles: {}}), 1000);
        }
    }

    render(){
        return(
            <div className={classes.score}>
                <div className={classes.score__circle}>
                    <p style={this.state.botStyles} className={[classes.score__enemy, classes.score__amount].join(' ')}>{this.props.botScore}</p>
                    <p style={this.state.playerStyles} className={[classes.score__player, classes.score__amount].join(' ')}>{this.props.playerScore}</p>
                </div>
            </div>
        );
    }
}

export default Score;