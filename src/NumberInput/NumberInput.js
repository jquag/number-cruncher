import React, { Component } from 'react';
import './NumberInput.css';

export default class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.clear = this.clear.bind(this);
    this.sort = this.sort.bind(this);
    this.unique = this.unique.bind(this);
    this.state = {
      numbers: ''
    }
  }
  
  handleInput(e) {
    const [numbers, invalids] = this._processNumbers(e.target.value);
    this.props.onNumbersChange(numbers, invalids);
    this.setState({ numbers: e.target.value });
  }
  
  render() {
    return (
      <div className="NumberInput">
        <h3>Numbers</h3>
        <div>
          <textarea id="numbers" onInput={this.handleInput} value={this.state.numbers}/>
        </div>
        <div className="button-container">
          <span><button onClick={this.sort}>Sort</button></span>
          <span><button onClick={this.unique}>Unique!</button></span>
          <span><button onClick={this.clear}>Clear</button></span>
        </div>
      </div>
    )
  }
  
  clear() {
    this.setState({ numbers: '' });
    this.props.onNumbersChange([]);
  }
  
  sort() {
    this.setState({ numbers: this._sorted().join('\n')});
  }
  
  unique() {
    this.setState(prevState => {
      const unique = Array.from(new Set(prevState.numbers.split('\n'))).join('\n');
      this.setState({ numbers: unique});
      this.props.onNumbersChange(...this._processNumbers(unique));
    });
  }
  
  _sorted() {
    const rows = this.state.numbers.split('\n');
    const nonNumbers = rows.filter(r => isNaN(parseFloat(r))).sort();
    const numbers = rows.filter(r => !isNaN(parseFloat(r))).sort((a, b) => parseFloat(a) - parseFloat(b));
    return numbers.concat(nonNumbers);
  }

  _processNumbers(val) {
    const rows = val.split('\n');
    const numbers = rows.filter(row => !isNaN(parseFloat(row))).map(num => parseFloat(num));
    const invalids = rows.filter(row => row !== '' && isNaN(parseFloat(row)));
    return [numbers, invalids];
  }
}