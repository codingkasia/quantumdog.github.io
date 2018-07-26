import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import RoomForm from './RoomForm';
import  Board from './Board';
import Cable from './Cables';

class RoomsList extends React.Component {
  state = {
    rooms: [],
    activeRoom: null,
    activeUser: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/rooms`)
      .then(res => res.json())
      .then(rooms => this.setState({ rooms }));
  };

  handleChangeGuess = () => {
    this.setState({
      value: this.props.value
    });
  };
  handleClick = id => {
    this.setState({ activeRoom: id });
  };

  handleReceivedRoom = response => {
    const { room } = response;
    this.setState({
      rooms: [...this.state.rooms, room]
    });
  };

  handleReceivedGuess = response => {
    const { guess } = response;
    const rooms = [...this.state.rooms];
    const room = rooms.find(room => room.id === guess.room_id);
    room.guesses = [...room.guesses, guess];
    this.setState({ rooms });
  };

  handleChangeGuess = (data) => {
      console.log(this.props.value);
      fetch("http://localhost:3001/guesses", {
          method: "POST",
          body: JSON.stringify({ value: data }),
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          }
      })
          .then(res => res.json())
          .catch(error => console.error("Error:", error))
          .then(response => console.log("Success:", response));
  }


  render = () => {
    const { rooms, activeRoom } = this.state;
    return <div className="roomsList">
        <ActionCable channel={{ channel: "RoomsChannel" }} onReceived={this.handleReceivedRoom} />

        {this.state.rooms.length ? <Cable rooms={rooms} handleReceivedGuess={this.handleReceivedGuess} /> : null}

        <h1>GAME ROOMS</h1>
        <p>
          In order to play a game you can create your own <br />
          or enter an existing one if available
        </p>
        <h2>Enter A Room To Play</h2>
        <ul>{mapRooms(rooms, this.handleClick)}</ul>
        <RoomForm />
      {activeRoom ? <Board room={findActiveRoom(rooms, activeRoom)} /> : null}
      </div>;
  };
}

export default RoomsList;

// helpers

const findActiveRoom = (rooms, activeRoom) => {
    return rooms.find(
        room => room.id === activeRoom
    );
};

const mapRooms = (rooms, handleClick) => {
    
        return rooms.map(room => {
            return (
                <li key={room.id} onClick={() => handleClick(room.id)}>
                    {room.name}
                </li>
            );
        });

   
};
