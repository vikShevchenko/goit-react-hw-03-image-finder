import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/Search';
import Loader from '../components/Loader/Loader';
//import Modal from "./Modal/Modal";
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    page: 1,
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.length === 0) {
      toast('Заповніть поле для введеня !');
      return;
    }
    this.setState({
      page: 1,
      query: e.target.elements.query.value,
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={1000} />
        <SearchBar onSubmit={this.handleSubmit} />
        <Loader page={this.state.page} query={this.state.query} />
        {/* <Modal /> */}
      </div>
    );
  }
}
export default App;

