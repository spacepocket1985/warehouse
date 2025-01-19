import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { setWarehouseItemName } from '../../../store/slices/warehouseSlice';

import styles from './ItemsSearch.module.css';
import { RoutePaths } from '../../../routes/routePaths';

export const ItemsSearch: React.FC = () => {
  const { itemName } = useAppSelector((state) => state.warehouse);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(itemName);

  const handleSearch = () => {
    dispatch(setWarehouseItemName(inputValue));
    navigate(`${RoutePaths.Main}?page=1`);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={'Поиск по названию'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        {'Поиск'}
      </button>
    </div>
  );
};
