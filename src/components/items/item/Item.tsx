import React from 'react';
import { ItemType } from '../../../types/apiTypes';

import styles from './Item.module.css';
import { Modal } from '../../modal/Modal';
import { ItemForm } from '../itemForm/ItemForm';

export const Item: React.FC<{ item: ItemType }> = React.memo(({ item }) => {
  return (
    <tr className={styles.itemTr}>
      <td>{item.name}</td>
      <td>{item.measurement_units}</td>
      <td>{item.code}</td>
      <td>
        <Modal isEditBtn={true}>
          {(handleClose) => (
            <ItemForm isEditMode={true} handleClose={handleClose} item={item} />
          )}
        </Modal>
      </td>
    </tr>
  );
});
