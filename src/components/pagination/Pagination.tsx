import { checkPageNum } from '../../utils/checkPageNum';

import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { setWarehousePage } from '../../store/slices/warehouseSlice';

import styles from './Pagination.module.css';

export const Pagination: React.FC = () => {
  const { total, pageSize, page } = useAppSelector((state) => state.warehouse);

  const dispatch = useAppDispatch();

  const totalPages = Math.ceil(total! / pageSize);
  const pages = [...Array(totalPages)].map((_, index) => index + 1);
  const currentPage = checkPageNum(page, total!);

  const siblingsCount = 2;
  let startPage, endPage;

  if (totalPages <= 5 + siblingsCount * 2) {
    startPage = 1;
    endPage = totalPages;
  } else {
    startPage = Math.max(currentPage - siblingsCount, 1);
    endPage = Math.min(currentPage + siblingsCount, totalPages);

    if (currentPage - siblingsCount <= 1) {
      endPage = 5;
    }

    if (currentPage + siblingsCount >= totalPages) {
      startPage = totalPages - 4;
    }
  }

  const onPageChange = (page: number) => {
    dispatch(setWarehousePage(page));
  };

  return (
    <div className={styles.paginationWrapper}>
      {currentPage > 1 && (
        <button
          className={styles.arrowBtn}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {'<-'}
        </button>
      )}
      {startPage > 1 && <button onClick={() => onPageChange(1)}>1</button>}
      {startPage > 2 && <span>...</span>}

      {pages.slice(startPage - 1, endPage).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? styles.currentBtn : ''}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages - 1 && <span>...</span>}
      {endPage < totalPages && (
        <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
      )}
      {currentPage < totalPages && (
        <button
          className={styles.arrowBtn}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {'->'}
        </button>
      )}
    </div>
  );
};
