import { Item } from '../item/Item';
import { ItemType } from '../../../types/apiTypes';


import styles from './ItemsList.module.css';

export const ItemsList: React.FC<{ items: ItemType[] }> = ({ items }) => {
  return (
    <table className={styles.itemsTable}>
      <thead>
        <tr>
          <th>{'Название'}</th>
          <th>{'Единица измерения'}</th>
          <th>{'Артикул/код'}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};
