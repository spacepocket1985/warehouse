import { Pagination } from '../../pagination/pagination';
import styles from './ListFooter.module.css';

export const ListFooter: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <Pagination/>
      <div>PageSize</div>
    </div>
  );
};
