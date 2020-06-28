import React, { Component } from "react";

import "./App.css";

import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  incrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  deleteHandler = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Counters
          counters={this.state.counters}
          onIncrement={this.incrementHandler}
          onDelete={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
