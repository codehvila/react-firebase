import styles from "./Modal.module.css";

export default function Modal({ children, handleModalClose }) {
  return (
    <div className={styles.modalBackdropOpen}>
      <div className={styles.modal}>
        <div className={styles.modalNavBar}>
          <a className={styles.modalClose} onClick={handleModalClose} href="/#">
            X
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
