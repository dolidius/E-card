import React, { Component } from 'react'
import classes from '../Game.module.scss';

import citizen from '../../../img/citizen.jpg';
import slave from './../../../img/slave.jpg';
import emperor from './../../../img/emperor.jpg';


import uuidv4 from 'uuid/v4';
import getRandomNumber from './../../../containers/utilities/getRandomNumber';
import moveCard from './../../../containers/utilities/moveCard';

class CardSet extends Component {

    constructor(props){
        super(props);
        this.placeholder = React.createRef();
        this.state = {
            set: null,
            card: null,
            moving: false,
        }
    }

    
    componentDidMount(){
        this.makeBoard();
        this.props.sendData({makePlayerBoard: this.makeBoard})
    }


    makeBoard = () => {
        console.log(this.props.set);
        const cardSet = [];
        let mainCardIndex = null;
        const set = this.props.set === 'emperor' ? emperor : slave;
        
        const randomNumber = getRandomNumber(0, 4);
        for (let i = 0; i < 5; i++){
            if(i === randomNumber) {
                cardSet.push(set);
                mainCardIndex = i;
                continue;
            }
                cardSet.push(citizen);
            }
        

        let cardSetArr = cardSet.map((card, index) =>(
            <div key={uuidv4()} className={classes.game__card} id={index === mainCardIndex ? this.props.set : null}>
                <img onClickCapture={this.moveCardPlayer} src={card} alt="player card"/>
            </div>));

        this.setState({set: cardSetArr});
    }

    moveCardPlayer = e => {
        if(this.props.playing) {
            const card = e.target.parentNode;

            if(this.state.card && this.state.card !== card && !this.state.moving){
                moveCard(card, this.placeholder.current);
                moveCard(this.state.card, this.placeholder.current);

                let newCard = this.state.card;

                this.setState({
                    card: newCard,
                    moving: true
                });

                setTimeout(() => {
                    this.setState({card, moving: false})
                    this.props.sendData({isDisabled: false});
                }, 300);

                setTimeout(() => this.props.sendData({playerCard: {
                    card: this.state.card,
                    type: this.state.card.id ? this.state.card.id : 'citizen'
                }}), 301);

            }

            if(this.state.card === card && !this.state.moving){
                moveCard(card, this.placeholder.current);

                this.setState({moving: true});
                setTimeout(() => {
                    this.setState({card: null, moving: false})
                    this.props.sendData({isDisabled: true});
                }, 300);

                setTimeout(() => this.props.sendData({playerCard: {
                    card: null,
                    type: null
                }}), 301);
                
            }

            if(!this.state.card && !this.state.moving){
                moveCard(card, this.placeholder.current);

                this.setState({moving: true});
                setTimeout(() => {
                    this.setState({card, moving: false});
                    this.props.sendData({
                        isDisabled: false,
                        playerCard: {
                            card: this.state.card,
                            type: this.state.card.id ? this.state.card.id : 'citizen'
                        }
                    });
                }, 300);

            }

        }
        
    }

    render() {
        return (
            <div className={classes.game__player_cards}>
                <div ref={this.placeholder} style={{top: '-120%'}} className={classes.game__placeholder}></div>

                {this.state.set}

            </div>
        )
    }
}

export default CardSet;