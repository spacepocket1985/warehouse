import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ItemType } from '../../../types/apiTypes';
import styles from './ItemForm.module.css';
import {
  useAddItemMutation,
  useUpdateItemMutation,
} from '../../../store/slices/apiSlice';

type ItemFormFields = {
  name: string;
  measurement_units: string;
  code: string;
  description: string;
};

type ItemFormType = {
  isEditMode: boolean;
  item?: ItemType;
  handleClose: () => void;
};

const textForAdd = {
  title: 'Новая позиция',
  subtitle: 'Заполните все поля для создания новой номенклатуры',
};

const textForEdit = {
  title: 'Позиция для редактирования',
  subtitle: 'Заполните все поля для создания новой номенклатуры',
};

export const ItemForm: React.FC<ItemFormType> = ({
  isEditMode,
  item,
  handleClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ItemFormFields>({
    defaultValues: {
      name: item?.name || '',
      measurement_units: item?.measurement_units || '',
      code: item?.code || '',
      description: item?.description || '',
    },
  });

  const [addNewItem] = useAddItemMutation();
  const [updateItem] = useUpdateItemMutation();

  const onSubmit: SubmitHandler<ItemFormFields> = async (data) => {
    if (!isEditMode) await addNewItem(data);
    else await updateItem({ ...data, id: item!.id });
    handleClose();
  };

  return (
    <div className={styles.fromWrapper}>
      <h4 className={styles.formTitle}>
        {isEditMode ? textForEdit.title : textForAdd.title}
      </h4>
      <h5 className={styles.formSubTitle}>
        {isEditMode ? textForEdit.subtitle : textForAdd.subtitle}
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label>Название</label>
          <input
            type="text"
            {...register('name', { required: 'Это поле обязательно' })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Единица</label>
          <input
            type="text"
            {...register('measurement_units', {
              required: 'Это поле обязательно',
            })}
          />
          {errors.measurement_units && (
            <span className={styles.error}>
              {errors.measurement_units.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Артикул</label>
          <input
            type="text"
            {...register('code', { required: 'Это поле обязательно' })}
          />
          {errors.code && (
            <span className={styles.error}>{errors.code.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Описание</label>
          <textarea
            {...register('description', { required: 'Это поле обязательно' })}
          />
          {errors.description && (
            <span className={styles.error}>{errors.description.message}</span>
          )}
        </div>

        <div className={styles.btnWrapper}>
          <button
            className={styles.btnClose}
            type="button"
            onClick={handleClose}
          >
            Отмена
          </button>
          <button className={styles.btnSave} type="submit" disabled={!isValid}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
