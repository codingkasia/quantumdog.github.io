import React from 'react'
import Square from './Square'
// import { API_ROOT, HEADERS } from '../constants';
// import { ActionCable } from 'react-actioncable-provider'

// const Board = ({ room: { id }, activeUser}) => {
const Board = ({ room: { id, name, guesses }, activeUser }) => {
  console.log(`activeUser is, ${activeUser}`)
  

  return <div>
    <div className='legend'>Winning Guess</div>
    <div className='board-grid'>
      <div className='board-row'>
        <Square value={1} room_id={id} user_id={activeUser} />
        <Square value={2} room_id={id} user_id={activeUser} />
        <Square value={3} room_id={id} user_id={activeUser} />
      </div>
      <div className='board-row'>
        <Square value={4} room_id={id} user_id={activeUser} />
        <Square value={5} room_id={id} user_id={activeUser} />
        <Square value={6} room_id={id} user_id={activeUser} />
      </div>
      <div className='board-row'>
        <Square value={7} room_id={id} user_id={activeUser} />
        <Square value={8} room_id={id} user_id={activeUser} />
        <Square value={9} room_id={id} user_id={activeUser} />
      </div>
    </div>
    {/* <div>{showNumbers(guesses)}</div> */}
  </div>
};

export default Board
// helpers

// const showNumbers = guesses => {
//   return guesses.map(guess => {
//     return <li key={guess.id}>{guess.value}</li>
//   })
// }

// clearBoard = () => {
//     return setTimeout(this.setState())
// }
