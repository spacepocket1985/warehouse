import { useEffect } from 'react';
import { getToken } from '../utils/getToken';
import { useGetItemListQuery } from '../store/slices/apiSlice';
import { getTokenFromLS } from '../utils/localStorageActions';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { ItemsList } from '../components/items/itemsList/itemsList';
import { setWarehouseTotal } from '../store/slices/warehouseSlice';

const Main: React.FC = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      console.log('Токен получен:', fetchedToken);
    };
    fetchToken();
  }, []);

  const dispatch = useAppDispatch();

  const { page, pageSize, sortOrder } = useAppSelector(
    (state) => state.warehouse
  );
  const token = getTokenFromLS();
  const skip = !token;
  const { data } = useGetItemListQuery({ page, pageSize, sortOrder }, { skip });
  if (data?.total) dispatch(setWarehouseTotal(data?.total));

  console.log(data);
  return (
    <>
      <ItemsList items={data?.result || []} />
    </>
  );
};

export default Main;
