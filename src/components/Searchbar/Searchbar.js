import './Searchbar.css';
import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';

export default class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
        <FiSearch  size='1.5rem' className='icon' />
          <input
            className='input'
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            autoFocus
            name="query"
          /> 
        </form>
      </div>
    );
  }
}
