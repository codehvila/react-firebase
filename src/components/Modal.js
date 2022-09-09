import { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children, modalIsOpen }) {
  const [showModal, setShowModal] = useState(modalIsOpen);

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div
      className={
        showModal
          ? `${styles.modalBackdropOpen}`
          : `${styles.modalBackdropClosed}`
      }
    >
      <div className={styles.modal}>
        <div className={styles.modalNavBar}>
          <a className={styles.modalClose} onClick={handleClick} href="/#">
            X
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
