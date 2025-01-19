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
        <button className={styles.headerActionsBtn}>{'+ Новая позиция'}</button>
      </div>
      <Modal isEditBtn={false} iconLabel={'test'}>
        {(handleClose) => <button onClick={handleClose} />}
      </Modal>
    </div>
  );
};
