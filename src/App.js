import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="middleSection">
          <div className="sideBar"> <Sidebar /></div>
          <div className="bodySection"><Body /></div>
        </div>
        <Footer />   
      </div>
    )
  }
}

export default App;
