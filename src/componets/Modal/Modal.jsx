import React from 'react';
import ReactDOM from 'react-dom';
import { useModal } from '../../context/ModalContext';
import styles from './Modal.module.css';

const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal();
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal}>
          &times;
        </button>
        {modalContent}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
