import logo from '../logoEmporiodovinho.jpeg';
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logoEmporiodovinho" />
        </header>
      </div>
    );
  }
}

export default Home;
