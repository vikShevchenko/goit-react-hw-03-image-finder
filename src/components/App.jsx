import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../components/Searchbar/Searchbar';
import Button from 'components/Button/Button';
import Loader from '../components/Loader/Loader';
import './App.css'

import React, { Component } from 'react'

class App extends Component {

  state = {
    page: 1,
    query: '', 
  }

hendleSubmit =(e)=> {
  e.preventDefault();
 
  if(e.target.elements.query.value.length === 0){
    toast("Заповніть поле для введеня !")
    return
  }
  this.setState({
    page: 1,
    query: e.target.elements.query.value,
  })  
  e.target.reset()
}
    
loadMore =()=> {
  this.setState((prev)=>{
      return{
      page: prev.page +1,
      error: null,
      }
  })
}
 render(){

  return (
    <div className='App'>
      <ToastContainer autoClose={1000}/>
      <Searchbar onSubmit={this.hendleSubmit} /> 
      <Loader page={this.state.page} query={this.state.query}/>
     
      <Button onClick={this.loadMore}/>
    </div>
  );
  }
};
export default App

