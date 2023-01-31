import Searchbar from '../components/Searchbar/Searchbar';
import Button from 'components/Button/Button';
// import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
//import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import './App.css'

import React, { Component } from 'react'

class App extends Component {

  state = {
    query: '',
    page: 1,
  }

  //-------------------------------------------------'

hendleSubmit =(e)=> {
  this.setState({
   query: e, 
  })  
}

    
loadMore =()=> {
  this.setState((prev)=>{
      return{
      page: prev.page +1
      }
  })
}
 render(){

  return (
    <div className='App'>
      <Searchbar onSubmit={this.hendleSubmit}/> 
       <Loader inputImage={this.state.query} inputPage={this.state.page}/>
     
      <Button ImageIncrement={this.loadMore}/>
      <Modal />
      
    </div>
  );
  }
};
export default App

