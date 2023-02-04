import React from 'react'
import * as basicLightbox from 'basiclightbox'

const Modal =()=> {

  const instance = basicLightbox.create(`
  <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()

  return (
    <div>

    </div>
  )
}
export default Modal



