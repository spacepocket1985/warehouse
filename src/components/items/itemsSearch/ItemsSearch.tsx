import styles from './ItemsSearch.module.css';

export const ItemsSearch: React.FC = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={'Поиск по названию'}
      />
      <button className={styles.searchBtn}>{'Поиск'}</button>
    </div>
  );
};
