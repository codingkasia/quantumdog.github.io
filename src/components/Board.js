import React from 'react'
import Square from './Square'
// import { API_ROOT, HEADERS } from '../constants';
// import { ActionCable } from 'react-actioncable-provider'

const Board = ({room: { id }}) => {
// const Board = ({ room: { id, name, guesses } }) => {
  return (
      <div>

        <div className="legend">
        Winning Guess 
        </div>
        <div className='board-grid'>
            <div className='board-row'>
            <Square value={1} room_id={id} />
            <Square value={2} room_id={id} />
            <Square value={3} room_id={id} />
            </div>
            <div className='board-row'>
            <Square value={4} room_id={id} />
            <Square value={5} room_id={id} />
            <Square value={6} room_id={id} />
            </div>
            <div className='board-row'>
            <Square value={7} room_id={id} />
            <Square value={8} room_id={id} />
            <Square value={9} room_id={id} />
            </div>
        </div>   
    </div>
  )
}

export default Board

// const showBoard = () => {
//   return (
//     <div className='board-row'>
//       <Square value={1} />
//       <Square value={2} />
//       <Square value={3} />
//     </div>
//   )
// }

// clearBoard = () => {
//     return setTimeout(this.setState())
// }
