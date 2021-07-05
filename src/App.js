import React, { Component } from "react";
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import "./App.css";

class App extends Component {

  render() {    
    return (
      <div className="App">
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;