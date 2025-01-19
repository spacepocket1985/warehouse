import { useEffect } from 'react';
import { getToken } from '../utils/getToken';
import { useGetItemListQuery } from '../store/slices/apiSlice';
import { getTokenFromLS } from '../utils/localStorageActions';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';

import { setWarehouseTotal } from '../store/slices/warehouseSlice';
import { ItemsList } from '../components/items/itemsList/itemsList';
import { ListFooter } from '../components/items/listFooter/ListFooter';
import { Spinner } from '../components/spinner/Spinner';

const Main: React.FC = () => {
  useEffect(() => {
    const fetchToken = async () => {
      await getToken();
    };
    fetchToken();
  }, []);

  const dispatch = useAppDispatch();

  const { page, pageSize, sortOrder, itemName } = useAppSelector(
    (state) => state.warehouse
  );
  const token = getTokenFromLS();
  const skip = !token;

  const { data, isFetching, isError } = useGetItemListQuery(
    { page, pageSize, sortOrder, itemName },
    { skip }
  );

  const errorMsg = 'Error fetching currencies. Please try refreshing';

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
