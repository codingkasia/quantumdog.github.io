import React, { Component } from "react";
import './App.css'; 
import RoomsList from "./components/RoomsList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomsList />
      </div>
    );
  }
}

export default App;
