import React from 'react'
import Square from './Square'

class Board extends React.Component {
  // state = {
  //   value: this.props.value,
  //   room_id: this.props.room_id,
  //   user_id: this.props.user_id,
  //   color: this.props.color,
  //   lucky: null,
  //   found: false,
  //   guesses: this.props.guesses
  // };

  renderSquare(i) {
    return (
      <Square
        guesses={this.props.room.guesses}
        value={i}
        room_id={this.props.room.id}
        user_id={this.props.activeUser}

      />
    );
  }

  render() {
    // console.log(`USER is, ${this.props.activeUser}`)
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
        </div>
        <div className="board-row">
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
      </div>
    );
  }
}

export default Board

// CONST

// const Board = ({ room: { id, name, guesses }, activeUser }) => {
//   console.log(`activeUser is, ${activeUser}`);
//   return (
//     <div>
//       <div className="legend">Winning Guess</div>
//       <div className="board-grid">
//         <div className="board-row">
//           <Square value={1} room_id={id} user_id={activeUser} />
//           <Square value={2} room_id={id} user_id={activeUser} />
//           <Square value={3} room_id={id} user_id={activeUser} />
//         </div>
//         <div className="board-row">
//           <Square value={4} room_id={id} user_id={activeUser} />
//           <Square value={5} room_id={id} user_id={activeUser} />
//           <Square value={6} room_id={id} user_id={activeUser} />
//         </div>
//         <div className="board-row">
//           <Square value={7} room_id={id} user_id={activeUser} />
//           <Square value={8} room_id={id} user_id={activeUser} />
//           <Square value={9} room_id={id} user_id={activeUser} />
//         </div>
//       </div>
//       {/* <div>{showNumbers(guesses)}</div> */}
//     </div>
//   );
// };
