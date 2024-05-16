import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./ModalCloseButton.module.css";
import PropTypes from "prop-types";

// w propsie title powinny być dwie wartości: 
// 1. Do you really want to leave?
// 2. Are you sure?
function ModalCloseButton({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleYesClick = () => {
    history.push("/login"); //należy podać właściwą ścieżkę (!!!)
  };

  const handleNoClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={styles.ModalWrapper}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.ModalContainer}>
        <div className={styles.ModalTitle}>
          <p>{title}</p>
        </div>
        <div className={styles.ModalButtons}>
          <button className={styles.ModalButtonStyle} onClick={handleYesClick}>
            YES
          </button>
          <button className={styles.ModalButtonStyle} onClick={handleNoClick}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

ModalCloseButton.propTypes = {
  title: PropTypes.oneOf(["Do you really want to leave?", "Are you sure?"])
    .isRequired,
};

export default ModalCloseButton;
