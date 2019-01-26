import React, { Component } from 'react'


import GameContainer from '../Container/GameContainer';
import Score from './Score/Score';
import CardSet from './CardSet/CardSet';
import Button from './../../containers/Buttons/Button';
import BotSet from './CardSet/BotSet';
import ResultModal from './ResultModal/ResultModal';

import itemRemove from '../../containers/utilities/itemRemove';

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
    }

    endTurn = () => {
        this.setState({playing: false, isDisabled: true});
        this.state.moveCardBot();
        setTimeout(() => {
            const result = this.checkResults(this.state.playerCard.type, this.state.botCard.type);
            if(result === 'win' || result === 'lose') {
                this.setState({playSound: true})
            }
            setTimeout(() => {
                switch(result){
                    case 'win':
                        this.setState(prevState => ({
                            playerScore: prevState.playerScore + (this.state.set === 'emperor' ? 1 : 3),
                            playSound: false,
                            turn: prevState.turn + 1
                        }));

                        this.checkTurn();

                        this.resetTurn();
                        break;
                    case 'lose':
                        this.setState(prevState => ({
                            botScore: prevState.botScore + (this.state.set === 'emperor' ? 3 : 1),
                            playSound: false,
                            turn: prevState.turn + 1
                        }));

                        this.checkTurn();
                        
                        this.resetTurn();
                        break;
                    default:
                        const playerCard = this.state.playerCard.card;
                        const botCard = this.state.botCard.card;
    
                        itemRemove(playerCard);
                        itemRemove(botCard);
    
                        this.setState({playing: true, isDisabled: true, playerCard, botCard});
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

    resetTurn = () => {
        this.state.makeBotBoard();
        this.state.makePlayerBoard();
        this.setState({playing: true});
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
        return (
            <GameContainer>
            
                <Score playerScore={this.state.playerScore} botScore={this.state.botScore} />

                <CardSet sendData={this.getData} set={this.state.set} playing={this.state.playing} />
                <BotSet playSound={this.state.playSound} sendData={this.getData} set={this.state.set === 'emperor' ? 'slave' : 'emperor'}  />

                <Button 
                    text={this.state.playing ? "End turn" : "Enemy's turn"}
                    btnClass='button__game'
                    isDisabled={this.state.isDisabled}
                    clicked={this.endTurn}
                />

                <ResultModal resetGame={this.resetGame} opened={this.state.opened} playerScore={this.state.playerScore} botScore={this.state.botScore} />

            </GameContainer>
        )
    }
}

export default Game;