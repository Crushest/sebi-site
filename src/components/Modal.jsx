import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  function closeHandler() {
    setIsClosing(true);
    setTimeout(() => {
      navigate("..");
    }, 600); // Wait for the animation duration before navigating
  }

  const modalClass = isClosing ? `${classes.modal} ${classes.out}` : classes.modal;

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={modalClass}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
