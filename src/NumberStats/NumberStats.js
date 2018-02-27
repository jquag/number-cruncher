import React, { Component } from 'react';
import './NumberStats.css';

export default class NumberStats extends Component {
  render() {
    const sum = this.props.numbers.reduce((acc, n) => acc + n, 0);
    const count = this.props.numbers.length;
    const distinct = new Set(this.props.numbers).size;
    const average = count !== 0 ? sum / count : 0;
    const sorted = [...this.props.numbers].sort((a, b) => a - b);
    return (
      <div className="NumberStats">
        <h3>Stats</h3>
        <div>
          <label>Count</label>
          <span className="stat-value">{count}</span>
        </div>
        <div>
          <label>Distinct</label>
          <span className="stat-value">{distinct}</span>
        </div>
        <div>
          <label>Sum</label>
          <span className="stat-value">{sum.toFixed(4)}</span>
        </div>
        <div>
          <label>Average</label>
          <span className="stat-value">{average.toFixed(4)}</span>
        </div>
        <div>
          <label>Min</label>
          <span className="stat-value">{sorted[0]}</span>
        </div>
        <div>
          <label>Max</label>
          <span className="stat-value">{sorted[sorted.length - 1]}</span>
        </div>
      </div>
    )
  }
}
