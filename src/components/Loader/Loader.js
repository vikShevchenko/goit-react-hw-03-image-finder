import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class Loader extends Component {
  state = {
    status: 'idle',
    items: '' 
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevProp.page !== this.props.page ||
      prevProp.query !== this.props.query
    ) 
    {
      const KEY = "31604149-1ec6bd5e260d55d5538125f55";
      const BASE_URL = "https://pixabay.com/api/";

      fetch(
        `${BASE_URL}?key=${KEY}&q=${this.props.query}&page=${this.props.page}&orientation=horizontal&image_type=photo&safesearch=true&per_page=12`
      )
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        return Promise.reject(new Error(`Інформація відсутня`));
      })
      .then((loadData) => loadData.json())
      .then((items) => this.setState({ items, status: "resolved" }))
      .catch((error) => this.setState({ error, status: "rejected" }))
    }
  }

  render() {

    <ToastContainer autoClose={1000} />;
    const { status } = this.state;
    if (status === 'idle') {
      return <></>;
    }
    if (status === 'pending') {
      return (
        <div>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
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
          
        </div>
      );
    }
  }
}
export default Loader;
