import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { setWarehousePageSize } from '../../../store/slices/warehouseSlice';
import styles from './ItemsOnPage.module.css';

export const validPageSizes = [5, 10, 50, 100, 200];

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
        {' '}
        {validPageSizes.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
