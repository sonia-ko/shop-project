import React from "react";

import classes from "./Modal.module.css";

interface ModalProps {
  modalText: string;
  overlay: boolean;
}

const Modal: React.FC<ModalProps> = ({ modalText, overlay }) => {
  return (
    <div>
      <div className={classes.modal}>
        <button className={classes.closeModal}>&times;</button>
        <h1>Hello guest 😍</h1>
        <p className={classes.modalText}>{modalText}</p>
      </div>
      {overlay ? <div className={classes.overlay}></div> : null}
    </div>
  );
};

export default Modal;
