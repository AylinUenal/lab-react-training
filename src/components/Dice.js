import React, { Component } from 'react';

const blankDice = '/img/dice-empty.png';

const images = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

let randomImage = images[Math.floor(Math.random() * images.length)]

class Dice extends Component {

    state = {
        currentImage: `${randomImage}`
    }
    
    clickHandler = () => {
        this.setState({ currentImage: blankDice });
        setTimeout(() => {
           this.setState({currentImage: images[Math.floor(Math.random() * images.length)]})
        }, 1000)
    }
    

    render() {
        return (
            <div>
                <img
                    onClick={this.clickHandler}
                    src={this.state.currentImage} style= {{width: '200px'}} alt="dice" />
            </div>
        );
    }
}

export default Dice;