import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={event => this.onChange(event)}></input>
          {/* <button>Submit</button> */}
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
