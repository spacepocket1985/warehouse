import { ItemForm } from '../items/itemForm/ItemForm';
import { ItemsInformer } from '../items/itemsInformer/ItemsInformer';
import { ItemsSearch } from '../items/itemsSearch/ItemsSearch';
import { Modal } from '../modal/Modal';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerHeading}>
        <h1 className={styles.headerTitle}>{'Номенклатура'}</h1>
        <ItemsInformer />
      </div>
      <div className={styles.headerActions}>
        <ItemsSearch />
        <Modal isEditBtn={false} label={'+ Новая позиция'}>
          {(handleClose) => (
            <ItemForm isEditMode={false} handleClose={handleClose} />
          )}
        </Modal>
      </div>
    </div>
  );
};
