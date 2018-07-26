import React, { Component } from "react";
import './App.css'; 
import RoomsList from "./components/RoomsList";
import Login from './components/Login'
import UserPage from "./components/UserPage";
import { Link, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (    
    <div>
      <Login />
      <UserPage />
      <RoomsList />
    
    </div>
    )
  }
}

export default App;
