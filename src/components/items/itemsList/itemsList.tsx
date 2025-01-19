import { Item } from '../item/Item';
import { ItemType, SortOrder } from '../../../types/apiTypes';

import styles from './ItemsList.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { setWarehouseSortOrder } from '../../../store/slices/warehouseSlice';

export const ItemsList: React.FC<{ items: ItemType[] }> = ({ items }) => {
  const { sortOrder } = useAppSelector((state) => state.warehouse);
  const dispatch = useAppDispatch();

  const handleThNameClick = () => {
    const sortValue =
      sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    dispatch(setWarehouseSortOrder(sortValue));
  };

  return (
    <table className={styles.itemsTable}>
      <thead>
        <tr>
          <th onClick={handleThNameClick}>{`[${sortOrder}]  Название`}</th>
          <th>{'Единица измерения'}</th>
          <th>{'Артикул/код'}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan={4} className={styles.noItems}>
              {'По запросу ничего не найдено.'}
            </td>
          </tr>
        ) : (
          items.map((item) => <Item key={item.id} item={item} />)
        )}
      </tbody>
    </table>
  );
};
