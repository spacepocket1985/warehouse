import { useAppSelector } from '../../../hooks/storeHooks';
import styles from './ItemsInformer.module.css';

export const ItemsInformer: React.FC = () => {
  const { total } = useAppSelector((state) => state.warehouse);
  return <>{total && <div className={styles.informer}>{total} единиц</div>}</>;
};
