import React, { Component } from 'react'
import "./Sidebar.css";

export class Sidebar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            initialBackgroundColor: "yellow",

        };

    }

    render() {
        return (
            <div className="sidebar" 
                style={{
                    backgroundColor: this.state.initialBackgroundColor,
              }}>
                <h1>SideBar!</h1>
                <ul>
                    <li>
                        <button onClick={() => this.setState((prevState) => {return {initialBackgroundColor: "red",};})}>Red</button>
                    </li>
                    <li>
                        <button onClick={() => this.setState((prevState) => {return {initialBackgroundColor: "green",};})}>Green</button>
                    </li>
                    <li>
                        <button onClick={() => this.setState((prevState) => {return {initialBackgroundColor: "blue",};})}>Blue</button>
                    </li>
                    
                </ul>
            </div>
        ); 
            
    }
}

export default Sidebar;
