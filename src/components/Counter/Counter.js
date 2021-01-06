import React, {Component} from 'react';
import './Counter.css';

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

  setPass = (event) => {
    this.setState({
      pass: +event.target.value
    })
  }
render() {
  return (
    <div className="Counter">
      <h2>Contador</h2>
      <h3>Valor Atul: {this.state.number}</h3>
      <div>
        <label htmlFor="inputPass"></label>
        <input id="inputPass" type="number" value={this.state.pass} onChange={this.setPass} />
      </div>
      <button onClick={this.dec}>-</button>
      <button onClick={this.inc}>+</button>
    </div>
  );
}
}
export default Counter;