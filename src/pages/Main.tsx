import { useEffect } from 'react';
import { getToken } from '../utils/getToken';
import { useGetItemListQuery } from '../store/slices/apiSlice';
import { getTokenFromLS } from '../utils/localStorageActions';
import { useAppSelector } from '../hooks/storeHooks';

const Main: React.FC = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      console.log('Токен получен:', fetchedToken);
    };
    fetchToken();
  }, []);

  const { page, pageSize, sortOrder } = useAppSelector(
    (state) => state.warehouse
  );
  const token = getTokenFromLS();
  const skip = !token;
  const { data } = useGetItemListQuery({ page, pageSize, sortOrder }, { skip });

  console.log(data);
  return (
    <>
      <h2>Main page</h2>
    </>
  );
};

export default Main;
