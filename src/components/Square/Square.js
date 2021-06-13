import React, { Component } from 'react';

export class Square extends Component {
    
    render() {
        return (
            <div style={{
                width: "100px", 
                height: "100px", 
                border:"3px solid black", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
                backgroundImage: `url(${this.props.urlImage})`
                }}>
                {this.props.name}
            </div>
        )
    }
};

export default Square;