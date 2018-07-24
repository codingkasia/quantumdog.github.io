import React, { Fragment } from 'react'
import { ActionCable } from 'react-actioncable-provider'

const Cable = ({ rooms, handleReceivedGuess, showBoard }) => {
  return (
    <Fragment>
      {rooms.map(room => {
        return (
          <ActionCable
            key={room.id}
            channel={{
              channel: "GuessesChannel",
              room: room.id
            }}
            // onReceived={handleReceivedGuess}
            onReceived={console.log("I am receiving the message!")}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable
