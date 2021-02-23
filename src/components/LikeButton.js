import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        counter: 0
}

    clickHandler = () => {
        //console.log('click')
        this.setState((state, props) => ({
            counter: state.counter +1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Likes: { this.state.counter}</button>
                
            </div>
        );
    }
}

export default LikeButton;