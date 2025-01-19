import { Pagination } from '../../pagination/Pagination';
import { ItemsOnPage } from '../itemsOnPage/ItemsOnPage';
import styles from './ListFooter.module.css';

export const ListFooter: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <Pagination />
      <ItemsOnPage />
    </div>
  );
};
