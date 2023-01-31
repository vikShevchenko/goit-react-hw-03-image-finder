import './Searchbar.css';
import React, { Component } from 'react';

export default class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
