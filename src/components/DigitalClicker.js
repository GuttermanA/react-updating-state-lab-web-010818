// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  // updateTimesClicked() {
  //
  // }

  updateTimesClicked = () => {
    let clicked = this.state.timesClicked
    this.setState({timesClicked: clicked + 1})
  }

  render() {
    return (
      <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
    )
  }
}
