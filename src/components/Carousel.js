import React, { Component } from 'react';



class Carousel extends Component {
    
    state = {
        index: 0
    }
    
    clickLeft = () => {
        console.log(this.props)
        
        if (this.state.index === 0) {
            
            this.setState((state, props) => ({
                index: 3
            })
            )
        }
    
    
        if (this.state.index) {
            this.setState((state, props) => ({
                index: state.index - 1
            }))
        }
    }

        clickRight = () => {
        
            if (this.state.index === 3) {
                this.setState((state, props) => ({
                    index: 0
                }))
            }
                    
            if (this.state.index < 3) {
                this.setState((state, props)=> ({
                    index: state.index + 1
                })
                )}        
        }

    render() {
    
        return (
            <div>
                <button onClick={this.clickLeft} >Left</button>
                <img src={this.props.imgs[this.state.index]} alt="sliding pictures"/>
                <button onClick={this.clickRight}>Right</button>
            </div>
        )
    }
}

export default Carousel;