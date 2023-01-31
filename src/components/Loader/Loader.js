import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class Loader extends Component {
  state = {
    status: 'idle',
    loadData: null,
    error: null,
    fuck: 1,
    
  };



  componentDidUpdate(prevProps, prevStats) {

    if (
      prevProps.inputPage !== this.props.inputPage ||
      prevProps.inputImage !== this.props.inputImage
    ) 
    {
      const prevName = prevProps.inputImage;
      const nextName = this.props.inputImage;
     
      if (prevName !== nextName) {
        this.setState({ status: 'pending' });

        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '31604149-1ec6bd5e260d55d5538125f55';

        return axios({
          url: BASE_URL,
          params: {
            key: KEY,
            q: nextName,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: this.state
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (response.status === 200) {
              return response;
            }
            return Promise.reject(new Error(`Інформація відсутня ${nextName}`));
          })
          .then(loadData => this.setState({ loadData, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
        }
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
          <ImageGallery loadData={this.state.loadData} />
        </div>
      );
    }


  }
}

export default Loader;
