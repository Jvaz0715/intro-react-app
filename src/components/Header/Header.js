import React, { Component } from 'react';
import "./Header.css";// brings in header stylesheet

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>React Intro Header</h1>
            </div>
        ); 
            
    }
}

export default Header;
