import React, { Component } from 'react';
import './InvalidList.css';

export default class InvalidList extends Component {
  render() {
    return (
      <div className="InvalidList">
        <h3>Ignored</h3>
        {this._invalidList().map((val, i) => <div className="invalid-item" key={i}>{val}</div>)}
      </div>
    );
  }
  
  _invalidList() {
    return this.props.invalids || [];
  }
}
