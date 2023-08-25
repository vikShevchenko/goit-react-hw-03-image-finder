import React from 'react'
import './Modal.css'

const Modal = ({ clickedImg, setClickedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setClickedImg(null)
    }
  }

  return (
    <>
      <div className='overlay dismiss' onClick={handleClick}>
        <img src={clickedImg} alt={clickedImg} />
        <span className='dismiss' onClick={handleClick}>X</span>
      </div>
    </>
  )
}

export default Modal