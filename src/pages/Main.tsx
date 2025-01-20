import { useEffect, useState } from 'react';
import { getToken } from '../utils/getToken';
import { useGetItemListQuery } from '../store/slices/apiSlice';

import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { setWarehouseTotal } from '../store/slices/warehouseSlice';
import { ItemsList } from '../components/items/itemsList/itemsList';
import { ListFooter } from '../components/items/listFooter/ListFooter';
import { Spinner } from '../components/spinner/Spinner';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isTokenLoaded, setIsTokenLoaded] = useState<boolean>(false);

  const { page, pageSize, sortOrder, itemName } = useAppSelector(
    (state) => state.warehouse
  );

  useEffect(() => {
    const fetchToken = async () => {
      await getToken();
      setIsTokenLoaded(true);
    };
    fetchToken();
  }, []);

  const skip = !isTokenLoaded;

  const { data, isFetching, isError } = useGetItemListQuery(
    { page, pageSize, sortOrder, itemName },
    { skip }
  );

  const errorMsg =
    'Ошибка при получении данных. Пожалуйста, попробуйте обновить страницу.';

  const contentOrSpinner = isFetching ? (
    <Spinner />
  ) : (
    <>
      <ItemsList items={data?.result || []} />
      {data?.total && <ListFooter />}
    </>
  );

  useEffect(() => {
    if (data?.total) {
      dispatch(setWarehouseTotal(data.total));
    }
  }, [data, dispatch]);

  return <>{isError ? errorMsg : contentOrSpinner}</>;
};

export default Main;
