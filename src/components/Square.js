import React from 'react';
// import { HEADERS } from '../constants';
import { API_ROOT, HEADERS } from '../constants';

class Square extends React.Component {
  state = {
    value: this.props.value,
    room_id: this.props.room_id,
    color: "blue"
  };

    // handleChange = () => {
    //     this.setState({ value: this.props.value });
    // };

  handleClick = () => {
    console.log("CLICKED!");
    // this.handleChange();
    console.log(this.state.value);
    this.setState({ bgColor: "green" });
    this.postGuess();
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