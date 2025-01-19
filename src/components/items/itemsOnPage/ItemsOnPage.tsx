import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { setWarehousePageSize } from '../../../store/slices/warehouseSlice';
import styles from './ItemsOnPage.module.css';

export const ItemsOnPage: React.FC = () => {
  const { pageSize } = useAppSelector((state) => state.warehouse);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    dispatch(setWarehousePageSize(selectedValue));
  };

  return (
    <div>
      <label htmlFor="itemsPerPage" className={styles.selectLabel}>
        Показывать по:
      </label>
      <select
        className={styles.itemsSelect}
        value={pageSize}
        onChange={handleChange}
      >
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};
