import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/Searchbar';
import Loader from '../components/Loader/Loader';
import Modal from "./Modal/Modal";
import './App.css';
import React, { Component } from 'react';

const KEY = '31604149-1ec6bd5e260d55d5538125f55';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {

  state = {
    query: '',
    status: 'idle',
    items: [],
    page: 1
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {

      fetch(
        `${BASE_URL}?q=${this.state.query}&page=${this.state.page}
        &key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(loadData => loadData.json())
        .then(items => this.setState(prev =>
        ({
          items: [...prev.items, ...items.hits],
          status: 'resolved'
        })))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const text = e.target.elements.query.value

    if (text.length === 0) {
      toast('Fill in the field!');
      return;
    }
    this.setState({
      query: text
    });
    e.target.reset();
    this.setState({ items: [] })
    this.setState({ page: 1 })
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }))
  }

  render() {
    console.log(this.state.query)
    return (
      <div className="App">
        <ToastContainer autoClose={1000} />
        <SearchBar onSubmit={this.handleSubmit} />
        <Loader

          loadMore={this.loadMore}
          status={this.state.status}
          items={this.state.items}
        />
        <Modal />
      </div>
    );
  }
}
export default App;



