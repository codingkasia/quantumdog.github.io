import React from 'react';
import { HEADERS } from '../constants';
import { API_ROOT } from '../constants';
const baseUrl = "http://localhost:3001";
const award = 100
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      room_id: this.props.room_id,
      user_id: this.props.user_id,
      bgColor: null,
      lucky: 10,
      found: false
    };
    this.findLucky = this.findLucky.bind(this);
  }
  // setUpPoints = () => {
  //   const player = this.state.user_id

  //   fetch(`${API_ROOT}/points`, {
  //     method: "POST",
  //     body: JSON.stringify({ points: 100}),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  // }

  // fetchPoints = () => {
  //   fetch(`${API_ROOT}/points`)
  //     .then(resp => resp.json())
  //     .then(result => console.log(result.points));
  // };

  luckyRewards = () => {
    // this.props.points = this.props.points + 100
    this.setState({ bgColor: "green" });

  };

  findLucky() {
    this.props.guesses.map(guess => {
      if (
        this.state.value === this.state.lucky &&
        this.state.value !== guess.value
      ) {
        console.log("YOU FOUND LUCKY!");
        this.luckyRewards();
      } else {
        this.setState({ bgColor: "orange" });
      }
    });
  }

  // test = () => {
  //   console.log(this.state.color)
  //   this.props.guesses.map(guess => {
  //     console.log(`VALUE, ${guess.value}, USER, ${this.state.user_id}, STATE VALUE, ${this.state.value}`);
  //     if (guess.value !== this.state.value ) {
  //       console.log(`IT IS IN DATABASE!, ${this.state.color}`)
  //      return this.setState({ color: "yellow" });
  //     } else {
  //       console.log("I AM A NEW ENTRY!")
  //       return this.setState({ color: "red" });
  //     }
  //   });
  // };

  totalPoints = this.props.points + 100
  test = () => {
    // console.log("AM I TESTING????")
    //   console.log(`VALUE, ${this.state.value}`);

    this.props.guesses.map(guess => {
      console.log(`USER IS ${guess.user_ids[0]}`);
      console.log(`THIS STATE USER IS  ${this.state.user_id}`);
      console.log(`GUESS, ${guess.value}`);
      return this.state.value === guess.value
        ? this.setState({
            bgColor: "purple"
          })
        : this.setState({
            bgColor: "yellow"
          });
    });
  };

  // gueesesStart = () => {
  //   this.state.guesses.map(guess => console.log(guess.value));
  // };

  foundLucky = () => {
    return this.state.value === this.state.lucky
      ? this.setState({ bgColor: "green", found: true })
      : this.setState({ bgColor: "orange" });
  };

  handleClick = () => {

    this.postGuess();
    this.findLucky();
    // this.updatePointsDB();
    this.updatePointState();


  };

  resetValue = () => {
    this.setState({ value: null });
  };
  componentWillReceiveProps = nextProps => {
    this.setState({ room_id: nextProps.room_id });
  };
  

  postGuess = () => {
    console.log("READY FOR FETCH");
    fetch(`${API_ROOT}/guesses`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: HEADERS
    });
    // .then(resp => resp.json()).then(result => this.test())
  };

  updatePointsDB = () => {
    fetch(`${API_ROOT}/points`, {
      method: "PATCH",
      body: JSON.stringify({ points: { points: this.points + award } }),
      headers: HEADERS
    });
  }

  updatePointState = () => {
    fetch(`${API_ROOT}/points`)
      .then(res => res.json())
      .then(points => {
        console.log(points.points)
        this.setState({points: points.points})
      });
  }

  render() {
    return (
      <button
        className="square"
        style={{ background: this.state.bgColor }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Square;