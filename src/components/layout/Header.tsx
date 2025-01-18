import { ItemsInformer } from '../items/itemsInformer/ItemsInformer';
import { ItemsSearch } from '../items/itemsSearch/ItemsSearch';

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
    </div>
  );
};
