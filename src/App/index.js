import React, { Component } from 'react';

import './style.less';
import logo from './react.png';

const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;
    const { title } = this.props;

    return (
      <div>
        <div className="header">
          <h1>{title}</h1>
          <img className="header-image" src={logo} alt="logo"/>
        </div>

        <hr/>

        <div className="content">
          <p>{counter}</p>

          <button type="button" onClick={this.onIncrement}>Increment</button>
          <button type="button" onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export {
  doIncrement,
  doDecrement,
};

export default App;