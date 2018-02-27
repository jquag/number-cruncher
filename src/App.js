import React, { Component } from 'react';
import './App.css';
import NumberInput from "./NumberInput/NumberInput";
import NumberStats from "./NumberStats/NumberStats";
import InvalidList from "./InvalidList/InvalidList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [],
      invalids: []
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Number Cruncher</h1>
        </div>
        <NumberInput onNumbersChange={this.handleNumberChange}/>
        <InvalidList invalids={this.state.invalids}/>
        <NumberStats numbers={this.state.numbers}/>
      </div>
    );
  }
  
  handleNumberChange(numbers, invalids) {
    this.setState({ numbers, invalids });
  }
}

export default App;
