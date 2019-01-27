import React, { Component } from 'react';

import classes from '../Game.module.scss';
import uuidv4 from 'uuid/v4';

import citizen from '../../../img/citizen.jpg';
import back from './../../../img/back.jpg';
import slave from './../../../img/slave.jpg';
import emperor from './../../../img/emperor.jpg';

import moveCard from './../../../containers/utilities/moveCard';
import getRandomNumber from './../../../containers/utilities/getRandomNumber';

class BotSet extends Component {

    constructor(props){
        super(props);
        this.placeholder = React.createRef();
        this.botCards = new Map();
    
        this.state = {
            cardSet: null,
            chosenCard: null,
            previousKeys: [],
        }    

    }

    componentDidMount(){
        this.makeBoard();
        this.props.sendData({moveCardBot: this.moveCardBot, makeBotBoard: this.makeBoard, rotateBotCard: this.rotateCard});
    }

        makeBoard = () => {
        const cardSet = [];
        for (let i = 0; i < 5; i++){
            cardSet.push(back);
        }
    
        const cards = cardSet.map((card, index) => (
        <div ref={c => this.botCards.set(index, c)} key={uuidv4()} className={classes.game__card}>
                <div className={[classes.game__card_side, classes.game__card_side_front].join(' ')}>
                    <img src={citizen} alt="opponent card, citizen"/>
                </div>
                <div className={[classes.game__card_side_back, classes.game__card_side].join(' ')}>
                    <img src={back} alt="backface of opponent card"/>
                </div>
        </div>));
    
        this.setState({cardSet: cards, cards});

    }

     moveCardBot = () => {
        let randomNumber;
        while(true) {
            randomNumber = getRandomNumber(0, 4);
            if(this.botCards.has(randomNumber)) {
                break;
            } 
        }
            
        const card = this.botCards.get(randomNumber);
        const cardIndex = getRandomNumber(0, this.botCards.size - 1);

        setTimeout(() => {
            moveCard(card, this.placeholder.current);
            this.botCards.delete(randomNumber);
            if(cardIndex === 0) {
                card.children[0].children[0].src = this.props.set === 'emperor' ? emperor : slave;
            }
            setTimeout(() => {
                if(!this.props.starting){
                    this.rotateCard(card);
                }
                
            }, 300);
            
        }, 600);

        if(cardIndex === 0) {
            this.props.sendData({botCard:{
                type: this.props.set,
                card
            }});

        } else {
            this.props.sendData({botCard: {
                type: 'citizen',
                card
            }})
        }

    }

    rotateCard = (card) => {
        card.children[0].style.transform = 'rotateY(0deg)';
        card.children[1].style.transform = 'rotateY(-180deg)';
    }

    render() {
        return (
            <div className={classes.game__opponent_cards}>
                
                <div ref={this.placeholder} style={{top: '120%'}} className={classes.game__placeholder}></div>
                {this.state.cardSet}

                <div style={{display: 'none'}}><img alt="main card" src={slave}/></div>
            </div>
        )
    }
}

export default BotSet;