import './SearchBar.css';
import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';

export default class SearchBar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
          <FiSearch size='1.5rem' className='icon' />
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </form>
      </header>
    );
  }
}





