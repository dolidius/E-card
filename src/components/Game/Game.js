import React, { Component } from 'react'


import GameContainer from '../Container/GameContainer';
import Score from './Score/Score';
import CardSet from './CardSet/CardSet';
import Button from './../../containers/Buttons/Button';
import BotSet from './CardSet/BotSet';
import ResultModal from './ResultModal/ResultModal';

import itemRemove from '../../containers/utilities/itemRemove';
import soundfile from '../../sounds/zawa.wav';

const audio = new Audio(soundfile);


class Game extends Component {
    state = {
        set: 'emperor',
        isDisabled: true,
        playing: true,
        playerCard: null,
        botCard: null,
        moveCardBot: null,
        playerScore: 0,
        botScore: 0,
        makePlayerBoard: null,
        makeBotBoard: null,
        botStarting: false,
        playSound: false,
        turn: 0,
        opened: false
    }

    getData = data => {
        if(data.isDisabled !== undefined) this.setState({isDisabled: data.isDisabled});
        if(data.playerCard !== undefined) this.setState({playerCard: data.playerCard});
        if(data.endTurn !== undefined) this.setState({endTurn: data.endTurn});
        if(data.text !== undefined) this.setState({text: data.text});
        if(data.playing !== undefined) this.setState({playing: data.playing});
        if(data.moveCardBot !== undefined) this.setState({moveCardBot: data.moveCardBot});
        if(data.botCard !== undefined) this.setState({botCard: data.botCard});
        if(data.makeBotBoard !== undefined) this.setState({makeBotBoard: data.makeBotBoard});
        if(data.makePlayerBoard !== undefined) this.setState({makePlayerBoard: data.makePlayerBoard});
        if(data.rotateBotCard !== undefined) this.setState({rotateBotCard: data.rotateBotCard});
    }

    endPlayerTurn = () => {
        if(!this.state.botCard){
            this.state.moveCardBot();
        }

        if(this.state.botStarting){
            this.state.rotateBotCard(this.state.botCard.card);
        }

        this.setState({playing: false, isDisabled: true});
        setTimeout(() => {
            const result = this.checkResults(this.state.playerCard.type, this.state.botCard.type);
            if(result === 'win' || result === 'lose') {
                setTimeout(() => {
                    audio.play();
                }, this.state.botStarting ? 350 : 1000)
            }
            setTimeout(() => {
                switch(result){
                    case 'win':
                    this.setState(prevState => ({
                            playerScore: prevState.playerScore + (this.state.set === 'emperor' ? 1 : 3),
                            playSound: false,
                            turn: prevState.turn + 1,
                            playerCard: null, 
                            botCard: null,
                        }));

                        this.checkTurn();
                        this.resetTurn(true);
                        break;
                    case 'lose':
                        this.setState(prevState => ({
                            botScore: prevState.botScore + (this.state.set === 'emperor' ? 3 : 1),
                            playSound: false,
                            turn: prevState.turn + 1,
                            playerCard: null, 
                            botCard: null
                        }));

                        this.checkTurn();
                        this.resetTurn();
                        break;
                    default:
                        const playerCard = this.state.playerCard.card;
                        const botCard = this.state.botCard.card;
    
                        itemRemove(playerCard);
                        itemRemove(botCard);

                        if(this.state.botStarting){
                            this.setState({playing: false, isDisabled: true, playerCard: null, botCard: null});
                            this.state.moveCardBot();
                            setTimeout(() => this.setState({
                                playing: true
                            }), 1200);
                        }else{
                            this.setState({playing: true, isDisabled: true, playerCard: null, botCard: null});
                        }
    
                }

            }, 2000);
        }, 200)

    }

    checkTurn = () => {
        if(this.state.turn === 3){
            this.state.set === 'emperor' ? this.setState({set: 'slave'}) : this.setState({set: 'emperor'});
        }

        if(this.state.turn === 6){
            this.setState({opened: true});
        }
    }

    resetTurn = (change = false) => {
        this.state.makeBotBoard();
        this.state.makePlayerBoard();

        if(change){
            this.setState({playing: false, botStarting: true});
            this.state.moveCardBot();
            setTimeout(() => this.setState({
                playing: true
            }), 1200);
        }else{
            this.setState({playing: true, botStarting: false});
        }
    }

    resetGame = () => {
        this.setState({
            set: 'emperor',
            isDisabled: true,
            playing: true,
            playerCard: null,
            botCard: null,
            playerScore: 0,
            botScore: 0,
            turn: 0,
            opened: false
        });

        setTimeout(() => {
            this.state.makePlayerBoard();
            this.state.makeBotBoard();
        }, 100);

    }

    checkResults = (playerCard, opponentCard) => {
        if(playerCard === 'citizen' && opponentCard === 'citizen') {
            return 'draw';
        }

        if(playerCard === 'emperor' && opponentCard === 'slave') {
            return 'lose';
        }

        if(playerCard === 'slave' && opponentCard === 'citizen') {
            return 'lose';
        }

        if(playerCard === 'slave' && opponentCard === 'emperor') {
            return 'win';
        }

        if(playerCard === 'citizen' && opponentCard === 'slave') {
            return 'win';
        }

        if(playerCard === 'citizen' && opponentCard === 'emperor') {
            return 'lose';
        }

        if(playerCard === 'emperor' && opponentCard === 'citizen') {
            return 'win';
        }
    }

    render() {
        let text;
        if(this.state.playing) {
            if(this.state.isDisabled) {
                text = 'Pick a card';

            } else {
                text = 'End Turn';
            }
        } else {
            text="Enemy's Turn"
        }
        return (
            <GameContainer>
            
                <Score playerScore={this.state.playerScore} botScore={this.state.botScore} />

                <CardSet sendData={this.getData} set={this.state.set} playing={this.state.playing} />
                <BotSet playSound={this.state.playSound} sendData={this.getData} set={this.state.set === 'emperor' ? 'slave' : 'emperor'} starting={this.state.botStarting} />

                <Button 
                    text={text}
                    btnClass='button__game'
                    isDisabled={this.state.isDisabled}
                    clicked={this.endPlayerTurn}
                />

                <ResultModal resetGame={this.resetGame} opened={this.state.opened} playerScore={this.state.playerScore} botScore={this.state.botScore} />

            </GameContainer>
        )
    }
}

export default Game;