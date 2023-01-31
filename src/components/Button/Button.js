import React from 'react'
import './Button.css'

const Button =({ImageIncrement})=> {
  return (
    <div className='ButContainer'>
      <button onClick={()=> ImageIncrement()}  className='Button'>Load more</button>
      </div>
  )
}
export default Button