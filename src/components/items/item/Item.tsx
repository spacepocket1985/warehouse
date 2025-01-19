import React from 'react';
import { ItemType } from '../../../types/apiTypes';

import styles from './Item.module.css';

export const Item: React.FC<{ item: ItemType }> = React.memo(({ item }) => {
  return (
    <tr className={styles.itemTr}>
      <td>{item.name}</td>
      <td>{item.measurement_units}</td>
      <td>{item.code}</td>
      <td>
        <button
          className={styles.itemBtn}
          onClick={() => console.log(`Editing item ${item.id}`)}
        />
      </td>
    </tr>
  );
});
