import { useEffect } from 'react';
import { getToken } from '../utils/getToken';

const Main: React.FC = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log('Токен получен:', token);
    };

    fetchToken();
  }, []);
  return (
    <>
      <h2>Main page</h2>
    </>
  );
};

export default Main;
