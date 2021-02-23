
import React, { Component } from 'react';

class ClickablePicture extends Component {

    state = {
        clicked: false
    }

    clickHandler = () => {
        console.log('click');
        this.setState((state, props) => ({
            clicked: !state.clicked
        }))
    }


    render() {
        return (
            <div>
                <h1>ClickablePicture</h1>
                <img onClick={this.clickHandler} src = {this.state.clicked ? this.props.img : this.props.imgClicked } alt="person with glasses"/>
                
            </div>
        );
    }
}

export default ClickablePicture;