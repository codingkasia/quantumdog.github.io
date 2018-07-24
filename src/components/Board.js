import React from 'react'
import Square from './Square'
// import { API_ROOT, HEADERS } from '../constants';

const Board = ({room: { id }}) => {
// const Board = ({ room: { id, name, guesses } }) => {
  return <div>
      <div className="board-row">
          <Square value={1} room_id={id} handleChange={this.handleChange}/>
        <Square value={2} room_id={id} />
        <Square value={3} room_id={id} />
      </div>
      <div className="board-row">
        <Square value={4} room_id={id} />
        <Square value={5} room_id={id} />
        <Square value={6} room_id={id} />
      </div>
      <div className="board-row">
        <Square value={7} room_id={id} />
        <Square value={8} room_id={id} />
        <Square value={9} room_id={id} />
      </div>
    </div>;
}

export default Board


// helpers

const handleChange = () => {
    this.setState({ value: this.props.value });
};

// const renderSquare = i => {
//   return <Square value={i} room_id={id} />
//   // return <Square value={i} handleChange={this.props.handleChange}  />;
//   // room_id = { id }
// };

// helpers

// const orderedGuesses = guesses => {
//     const sortedGuesses = guesses.sort(
//         (a, b) => new Date(a.created_at) - new Date(b.created_at)
//     );
//     return sortedGuesses.map(guess => {
//         return <li key={guess.id}>{guess.text}</li>;
//     });
// };
