import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import Buttons from './Buttons';
import FormPass from './FormPass';

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialPass || 5
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.pass
    })
  }
  dec = () => {
    this.setState({
      number: this.state.number - this.state.pass
    })
  }

  setPass = (newPass) => {
    this.setState({
      pass: newPass
    })
  }
  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <div>
          <FormPass pass={this.state.pass} />
          <Buttons inc={() => this.inc()} dec={() => this.dec()} setPass={this.setPass} />
        </div>

      </div>
    );
  }
}
export default Counter;