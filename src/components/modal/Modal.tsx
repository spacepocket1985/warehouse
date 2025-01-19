import { FC, ReactNode, useState } from 'react';
import styles from './Modal.module.css';

type ModalPropsType = {
  children: (handleClose?: () => void) => ReactNode;
  iconLabel?: string;
  isEditBtn: boolean;
};

export const Modal: FC<ModalPropsType> = ({
  children,
  iconLabel,
  isEditBtn,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={isEditBtn ? styles.editBtn : styles.simpleBtn}
      >
        <span>{iconLabel}</span>
      </button>
      {open && (
        <>
          <div className={styles.backdrop} onClick={handleClose} />
          <div className={`${styles.modal} ${open ? styles.show : ''}`}>
            <button
              className={styles.closeBtn}
              onClick={handleClose}
              type="button"
            >
              X
            </button>
            {children(handleClose)}
          </div>
        </>
      )}
    </>
  );
};
