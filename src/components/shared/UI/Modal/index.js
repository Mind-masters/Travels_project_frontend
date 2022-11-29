import styles from "./Modal.module.css"
import  ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";

const ModalOverlay = props => {
    const content = (
        <div className={styles.modal_container}>
            {props.children}
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

const Modal = props => {
    return <Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={300}
        >
            <ModalOverlay {...props} />
        </CSSTransition>
    </Fragment>
}

export default Modal;