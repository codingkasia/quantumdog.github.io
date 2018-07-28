import React from 'react'
import Square from './Square'
// import { API_ROOT, HEADERS } from '../constants';
// import { ActionCable } from 'react-actioncable-provider'

class Board extends React.Component {

 

  renderSquare(i) {
    return <Square guesses={this.props.room.guesses} value={i} room_id={this.props.room.id} user_id={this.props.activeUser} />;
  }

  render() {
    console.log(`ROOM is, ${this.props.room.id}`)
    console.log(`USER is, ${this.props.activeUser}`);


    return (
      <div>
       
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <Square test={this.test} />
      </div>
    )
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
