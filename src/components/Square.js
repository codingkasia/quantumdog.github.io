import React from 'react';
// import { HEADERS } from '../constants';
import { API_ROOT, HEADERS } from '../constants';

class Square extends React.Component {
  // showUser = () => {
  //   console.log(_current_user)
  // }
  state = {
    value: this.props.value,
    room_id: this.props.room_id,
    user_id: this.props.user_id,
    bgColor: null,
    lucky: null,
    found: false,
    guesses: this.props.guesses
  };

  test = () => {
    this.state.guesses.map(guess => {
      console.log(guess.value);
      if (guess.value === this.state.value) {
        this.setState({ bgColor: "purple" });
        console.log("bingo!")
      } else {
        this.setState({ bgColor: "green" });
        console.log("my bid is first!")

      }
    });
  };
  componentDidMount() {
    this.setState({ lucky: Math.floor(Math.random() * 9) + 1 });
  }

  foundLucky = () => {
   
    return this.state.value === this.state.lucky
      ? this.setState({ bgColor: "green", found: true })
      : this.setState({ bgColor: "orange" });
  };

  handleClick = () => {
    console.log(`VALUE = , ${this.state.value}`);
    console.log(this.state.value);
    // console.log(`user id =${this.state.user_id}`);
    // this.foundLucky();
    this.postGuess();
    this.test();
    this.resetValue()
  };
  resetValue = () => {
    this.setState({ value: null });
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ room_id: nextProps.room_id });
  };

  postGuess = () => {
    // console.log("READY FOR FETCH");
    fetch(`${API_ROOT}/guesses`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: HEADERS
    }); 
  };
  render = () => {
    return (
      <button
        className="square"
        style={{ background: this.state.bgColor }}
        onClick={this.handleClick}
      />
    );
  };
}

export default Square;