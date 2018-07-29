import React from 'react';
import { HEADERS } from '../constants';
import { API_ROOT } from '../constants';
const baseUrl = "http://localhost:3001";
class Square extends React.Component {

  state = {
    value: this.props.value,
    room_id: this.props.room_id,
    user_id: this.props.user_id,
    bgColor: null,
    lucky: null,
    found: false
    // guesses: this.props.guesses
  };

  saveClick = () => {
    console.log(this.props.value)
    this.setState({value: this.props.value})
  }
  // test = () => {
  //   console.log(this.state.color)
  //   this.state.guesses.map(guess => {
  //     console.log(`VALUE, ${guess.value}, USER, ${this.state.user_id}, STATE VALUE, ${this.state.value}`);
  //     if (guess.value !== this.state.value ) {
  //       console.log(`IT IS IN DATABASE!, ${this.state.color}`)
  //      return this.setState({ color: "yellow" });
  //     } else {
  //       console.log("I AM A NEW ENTRY!")
  //       return this.setState({ color: "red" });
  //     }
  //   });
  // }

  

  test = () => {
  console.log("AM I TESTING????")
    console.log(`VALUE, ${this.state.value}`);
    this.props.guesses.map(guess => {
      console.log(`GUESS, ${guess.value}`)
      return this.state.value !== guess.value ? this.setState({
            bgColor: "purple"

          }) : this.setState({ bgColor: "green" });
          console.log(`COLOR: ${this.state.bgColor}`)
      // if (guess.value === this.state.value) {
      //   this.setState({ bgColor: "purple" });
      //   console.log("bingo!")
      // } else {
      //   this.setState({ bgColor: "green" });
      //   console.log("my bid is first!")

      // }
    });
  };

  gueesesStart = () =>{
    this.state.guesses.map(guess => console.log(guess.value))

  }
 
  // componentDidMount() {
   
  //   this.setState({ lucky: Math.floor(Math.random() * 9) + 1 });

  // }

  foundLucky = () => {
   
    return this.state.value === this.state.lucky
      ? this.setState({ bgColor: "green", found: true })
      : this.setState({ bgColor: "orange" });
  };

  handleClick = () => {
    // this.foundLucky();
    this.saveClick()
    this.postGuess();
    this.test();
    // this.resetValue()
  };


  resetValue = () => {
    this.setState({ value: null });
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ room_id: nextProps.room_id });
  };

  postGuess = () => {
    console.log("READY FOR FETCH");
    fetch(`${API_ROOT}/guesses`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: HEADERS
    })
  };

  render() {

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