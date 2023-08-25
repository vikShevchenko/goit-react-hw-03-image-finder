import React, { Component } from 'react';
import './Button.css';

//якщо масив зображень порожній кнопка не рендериться
export default class Button extends Component {
  render() {
    return (
      <div className="ButContainer">
        <button className="Button" onClick={this.props.onClick}>
          Add pages
        </button>
      </div>
    );
  }
}
