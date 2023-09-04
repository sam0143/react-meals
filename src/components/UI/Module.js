import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Module.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClosecart}/>;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  
  
  const portalElement = document.getElementById('overlays');
  
  const Modal = (props) => {

    console.log(props.children)

    return (
      <Fragment>
        {createPortal(<Backdrop onClosecart={props.children}/>, portalElement)}
        {createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
    
  };
  
  export default Modal;