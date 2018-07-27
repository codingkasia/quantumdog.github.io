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
    color: null ,
    lucky: null,
    found: false,
    
  };


    componentDidMount() {
        this.setState({ lucky: Math.floor(Math.random() * 9) + 1 });

    }

    foundLucky = () => {
        // console.log("YOU FOUND LUCKY!")
        console.log(`User with id, ${this.state.user_id} got lucky!`)
   
      return this.state.value === this.state.lucky ? this.setState({ bgColor: "green", found: true }) : this.setState({ bgColor: "orange" });
    }

  handleClick = () => {
    // console.log(this.params.users)
    console.log(this.state.value);
    console.log(`user id =${this.state.user_id}`)
      this.foundLucky() 
      this.postGuess();
      this.test()

  };

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

    this.setState({value: null})
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