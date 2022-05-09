import React from 'react'
import classes from "./Modal.module.css"

const Modal = ({ children }) => {
  return (
    <div>
    <div className={classes.backdrop}></div>
    <div className={classes.modalBody}>
          {children}
    </div>
  </div>
  )
}

export default Modal