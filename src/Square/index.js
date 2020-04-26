import React from 'react';
import './style.css';

class Square extends React.Component{
    

    render() {
        return (
            <button className = 'square-box'
            onClick = {() => this.props.squarePressed()}
            >
            {this.props.value}
            </button>
        );
    }
}

export default Square;