const storageKey = 'warehouseAuthToken';

const setTokenToLS = (access_token: string): void => {
  localStorage.setItem(storageKey, access_token);
};

const getTokenFromLS = (): string | null => localStorage.getItem(storageKey);

export { setTokenToLS, getTokenFromLS };
