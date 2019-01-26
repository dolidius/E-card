import React, { Component } from 'react';
import classes from './ResultModal.module.scss';
import Button from '../../../containers/Buttons/Button';

class ResultModal extends Component {
    render() {
        if(this.props.opened){
            let result;
            if(this.props.playerScore > this.props.botScore) {
                result = 'You win!'
            } else if(this.props.botScore > this.props.playerScore) {
                result = 'You lose!'
            } else {
                result = "It's a draw!"
            }
            return (
                <div className={classes.modal__background}>
                    <div className={classes.modal}>
                        <h2 className={classes.modal__info}>{result}</h2>

                        <div className={classes.modal__score}>
                            <span>{this.props.playerScore}</span>
                            <span> - </span>
                            <span>{this.props.botScore}</span>
                        </div>

                        <div className={classes.modal__buttons}>
                            <Button text='Play again' btnClass='button__result' clicked={this.props.resetGame} />
                            <Button text='Back to menu' href='/' btnClass='button__result' />
                        </div>
                        

                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default ResultModal;