import React, { Component } from 'react';



class Carousel extends Component {
    
    
    state = {
        currentImage: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
    
    clickLeft = () => {
        this.setState({currentImage: this.props.imgs[1]})
    }

    render() {
        console.log(this.props.imgs[0]);

        return (
            <div>
                <button onClick={this.clickLeft} >Left</button>
                <img src={this.state.currentImage} alt="sliding pictures"/>
                <button>Right</button>
            </div>
        );
    }
}

export default Carousel;