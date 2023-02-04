import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button'; 

class Loader extends Component {
  state = {
    status: 'idle',
    items: '',
    page: 1, 
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProp.query !== this.props.query
    ) {
      const KEY = '31604149-1ec6bd5e260d55d5538125f55';
      const BASE_URL = 'https://pixabay.com/api/';

      fetch(
        `${BASE_URL}?key=${KEY}&q=${this.props.query}&page=${this.state.page}&orientation=horizontal&image_type=photo&safesearch=true&per_page=12`
      )
        .then(loadData => loadData.json())
        .then(items => this.setState({ items, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
   console.log(this.state.items)
  }

  loadMore = () => {
    this.setState(prev => {
      return {
        page: prev.page + 1,
      };
    });
  };

  render() {
    <ToastContainer autoClose={1000} />;
    const { status } = this.state;
    if (status === 'idle') {
      return <></>;
    }
    if (status === 'pending') {
      return (
        <div>
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      );
    }
    if (status === 'rejected') {
      return <div>{toast.error('Помилка!')}</div>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ImageGallery loadData={this.state.items} />
          <Button onClick={this.loadMore} />
        </div>
      );
    }
  }
}
export default Loader;
