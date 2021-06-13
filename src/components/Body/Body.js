import React, { Component } from 'react';
import Square from '../Square/Square';
import "./Body.css";

export class Body extends Component {
    render() {
        return (
            <div className="body">
                
                <div>
                    <img src="https://images.unsplash.com/photo-1604579230277-ad930b24a9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2691&q=80" alt="Bear Mountain Bridge" className="body-image" />
                </div>

                <div className="lorem-div">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="squares-div">
                    <Square name="Square 1" urlImage="https://images.unsplash.com/photo-1475965894430-b05c9d13568a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"/>
                    <Square name="Square 2" urlImage="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80" />
                    <Square name="Square 3" urlImage="https://images.unsplash.com/photo-1541415534056-fad380cd68a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=950&q=80" />
                </div>
                
            </div>
        ); 
            
    }
}

export default Body;
