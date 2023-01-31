import './Searchbar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react'

export default class Searchbar extends Component {

  state = {
    query: '',
   }

   hendleChange =(e)=> {
    this.setState({query: e.currentTarget.value.toLowerCase()})
   } 

  hendleSubmit =(e)=> {
    e.preventDefault();

    if(this.state.query.trim() === ''){
      toast("Заповніть поле для введеня !")
      return
    }

    this.setState({
     query: '',
     
    })  
    this.props.onSubmit(this.state.query)
    console.log(e.target.query.value) 
  }
 
  render(){
    return (
 
      <div className='Searchbar'>
        <ToastContainer autoClose={1000}/>
          <form  
          className='form' onSubmit={this.hendleSubmit}>
            <input
              className='input'
              name='query'
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.hendleChange}
            />
            <button type="submit" className="button">Search</button>
            </form>
      </div>
    );
  }
}


