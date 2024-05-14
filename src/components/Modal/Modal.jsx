import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.css';
import { logoutUser } from 'redux/auth/authOperations';
import { useTranslation } from 'react-i18next';

// const modalRoot = document.querySelector('#modal-root');

function Modal({ handleClickLeft, handleClickRight, onClose, styleReg }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.modalWrapper} onClick={handleOverlayClick}>
      <div className={`${styles.modalContainer} ${styleReg}`}>
        <span className={styles.closeBtn} onClick={onClose}>
          &#10006;
        </span>

        <div className={styles.title}>
          <p>{t('logout.modalInfo')}</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.buttonStyles} onClick={handleLogout}>
            {t('logout.yes')}
          </button>
          <button className={styles.buttonStyles} onClick={handleClickRight}>
            {t('logout.no')}
          </button>
        </div>
      </div>
    </div>
    // modalRoot,
  );
}

export default Modal;
