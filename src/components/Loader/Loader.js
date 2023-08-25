import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';


class Loader extends Component {



  render() {



    <ToastContainer autoClose={1000} />;
    const { status } = this.props;
    if (status === 'idle') {
      return <></>;
    }
    if (status === 'pending') {
      return (
        <>
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
        </>
      );
    }

    if (status === 'rejected') {
      return <>{toast.error('Помилка!')}</>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery loadData={this.props.items} />
          {this.props.items && <Button onClick={this.props.loadMore} />}
        </>
      );
    }
  }
}
export default Loader;
